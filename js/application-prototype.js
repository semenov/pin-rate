var application = {

    /**
     * Вырезанная вёрстка без бэкенда, выдрано без всякой логики, лишь бы работал прототип
     */

    projects: null,
    map: null,
    options: null,

    initialize: function(options) {
        // UI
        $('#map').addClass('map_position_b');
        window.setTimeout(function() {
            $('#sidebar').addClass('sidebar_visible');
            $('#map').addClass('map_position_c');
        }, 1000);

        $('#sidebar_toggle').on('click', function(e) {
            
        });

        //this.options.serverGeolocation = options.geolocation;
        //this.getProjectList();
        this.request('http://catalog.api.2gis.ru/project/list', {}, this.saveProjectList, this.saveProjectList);
    },

    saveProjectList: function(projectsResult) {
        if (projectsResult.response_code === '200') {
            application.projects = projectsResult.result;
        }

        application.renderProjectList();
        application.setProject();
    },

    getProjectCenter: function(projectId) {
        var projectData = {},
            projectCenter = [];

        projectData = this.getProjectDataById(projectId);
        projectCenter = this.parseWKTPoint(projectData.centroid);

        return projectCenter;
    },

    parseWKTPoint: function(WKTString) {
        var regexpString = '.*?([+-]?\\d*\\.\\d+)(?![-+0-9\\.])(\\s+)([+-]?\\d*\\.\\d+)(?![-+0-9\\.])',
            regexpObject = {},
            regexpResult = [],
            parseResult = [];

        regexpObject = new RegExp(regexpString, ['i']);
        regexpResult = regexpObject.exec(WKTString);
        parseResult.push(regexpResult[3], regexpResult[1]);

        return parseResult;
    },

    showProject: function(coordinates) {
        if (this.map === null) {
            this.map = new DG.Map('map');
            this.map.setCenter(new DG.GeoPoint(coordinates[1], coordinates[0]),11);
        } else {
            this.map.setCenter(new DG.GeoPoint(coordinates[1], coordinates[0]),11);
        }
    },

    setCityselectLinkLabel: function(label) {
        $('#show_cityselect').text(label);
    },

    renderProjectList: function() {
        var projects = this.projects,
            projectsListHtml = '';

        for (var project in projects) {
            projectsListHtml += '<li class="list__item"><a href="#" data-id="' 
                + projects[project].id + '" class="link">' 
                + projects[project].name
                + '</a></li>';
        }

        $('#cityselect').html(projectsListHtml);
    },

    setProject: function(projectId) {
        var projectId = 1,
            projectData = this.getProjectDataById(projectId),
            projectCoordinates = this.getProjectCenter(projectId);

        this.showProject(projectCoordinates);
        this.setCityselectLinkLabel(projectData.name);
        //this.options.projectId = projectId;
        //this.saveLocation();
    },

    getProjectDataById: function(projectId) {
        var projects = this.projects,
            i;

        for (i = 0; i < projects.length; i++) {
            if (projects[i].id && projects[i].id == projectId) {
                return projects[i];
            }
        }

        return false;
    },

    request: function(addressString, data, doneCallback, failCallback, context) {
        var request,
            requestData = {
                'key': 'rulhck5627',
                'output': 'jsonp',
                'version': '1.3'
            };

        $.extend(requestData, data);

        request = $.ajax(
            addressString,
            {
                data: requestData,
                dataType: 'jsonp'
            }
        );

        $.when(request)
            .done(doneCallback)
            .fail(failCallback);
    },

};