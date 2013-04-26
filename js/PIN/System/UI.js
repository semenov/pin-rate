PIN.System.UI = {

	components: {},

	initialize: function() {
		this._initUIComponents();
        this._initPlaceholders();
        this._updateMapContainerSize();
        setTimeout(this.toggleSidebar, 1000);

        baron($('.baron-wrapper'), {
            scroller    : '.baron-scroller',
            container   : '.baron-container',
            bar         : '.baron-scroller__bar',
            barTop      : 0,
            barOnClass  : 'baron-scroller__bar_state_on'
        });
	},

    _initUIComponents: function() {
        this.components = {
            appwindow       : $(window),
            application     : $('#application'),
            map             : $('#map'),
            result          : $('#result'),
            resultToggle    : $('#result_toggle'),
            sidebar         : $('#sidebar'),
            sidebar_toggle  : $('#sidebar_toggle'),
            address_form    : $('#address_form'),
            address_address : $('#address_address'),
            address_submit  : $('#address_submit'),
            select_panel    : $('#select_panel'),
            cityselect      : $('#cityselect'),
            show_cityselect : $('#show_cityselect'),
            places          : $('#places')
        };

        this._setupUIHandlers();
    },

    _setupUIHandlers: function() {
        this.components.appwindow.bind('resize', this._updateMapContainerSize);
        this.components.sidebar_toggle.bind('click', this.toggleSidebar);
        $('#cityselect').on('click', '.link', function(e) {
            var id = $(this).attr('data-id');

            PIN.System.UI.markDefaultCityInCityselect(id);

            setTimeout(function() { 
                PIN.System.UI.toggleSelectPanel(null, 'hide');
            }, 600);
            setTimeout(function() { PIN.Application.setProject(id); }, 1000);
            e.preventDefault();
        });
        $('#places').on('click', '.link', function(e) {
            var id = $(this).attr('data-id'),
                place = PIN.Application.getResultById(id);

            setTimeout(function() { 
                PIN.System.UI.toggleSelectPanel(null, 'hide');
                PIN.System.UI.togglePlaces('hide'); 
            }, 600);
            setTimeout(function() { PIN.Plugins.Search.placeRequest(place); }, 800);
            e.preventDefault();
        })
        this.components.show_cityselect.bind('click', function(e) {
            e.preventDefault();

            // @todo Переписать этот треш!

            if (PIN.System.UI.isSelectPanelVisible()) {
                if (PIN.System.UI.isCityselectVisible()) {
                    PIN.System.UI.toggleCityselect('hide');
                    PIN.System.UI.toggleSelectPanel(null, 'hide');
                } else {
                    PIN.System.UI.togglePlaces('hide');
                    PIN.System.UI.toggleSelectPanel(null, 'hide');

                    setTimeout(function() {
                        PIN.System.UI.toggleCityselect('show');
                        PIN.System.UI.toggleSelectPanel(null, 'show');
                    }, 600);
                }
            } else {
                PIN.System.UI.toggleCityselect('show');
                PIN.System.UI.toggleSelectPanel(null, 'show');
            }
        });
        this.components.address_form.bind('submit', function(e){
            if (PIN.System.UI.isSelectPanelVisible()) {
                PIN.System.UI.toggleSelectPanel(null, 'hide');
                PIN.System.UI.toggleCityselect('hide');
                setTimeout(function() {
                    PIN.Plugins.Search.houseSearch(e);
                }, 600);
            } else {
                PIN.Plugins.Search.houseSearch(e);    
            }

            e.preventDefault();
        });
        this.components.address_submit.bind('click', this._submitForm);
    },

    _submitForm: function(e) {
        PIN.System.UI.components.address_form.submit();
        e.preventDefault();
    },

    _initPlaceholders: function() {
        $('input[placeholder]').placeholder();
    },

    _updateMapContainerSize: function() {
        PIN.System.UI.components.map.height(PIN.System.UI.components.sidebar.outerHeight())
            .width(PIN.System.UI.components.application.width() + 425);
    },

    toggleSidebar: function(e) {
        if (PIN.System.UI.components.sidebar.hasClass('sidebar_visible') 
            && PIN.System.UI.components.sidebar.hasClass('sidebar_select-panel_visible')) {

            PIN.System.UI.components.map.removeClass('map_position_c');
            PIN.System.UI.components.sidebar.removeClass('sidebar_select-panel_visible');
        } else {
            PIN.System.UI.components.sidebar.toggleClass('sidebar_visible');
            PIN.System.UI.components.map.toggleClass('map_position_b');
        }

        if (e) {
            e.preventDefault();
        }
    },

    toggleSelectPanel: function(e, state) {
        if (state === 'show') {
            PIN.System.UI.components.sidebar.addClass('sidebar_select-panel_visible');
            PIN.System.UI.components.map.addClass('map_position_c');

            baron($('.baron-wrapper'), {
                scroller    : '.baron-scroller',
                container   : '.baron-container',
                bar         : '.baron-scroller__bar',
                barTop      : 0,
                barOnClass  : 'baron-scroller__bar_state_on'
            });
        } else if (state === 'hide') {
            PIN.System.UI.components.sidebar.removeClass('sidebar_select-panel_visible');
            PIN.System.UI.components.map.removeClass('map_position_c');
        }

        if (e) {
            e.preventDefault();
        }
    },

    isSelectPanelVisible: function() {
        return PIN.System.UI.components.sidebar.hasClass('sidebar_select-panel_visible');
    },

    isCityselectVisible: function() {
        return PIN.System.UI.components.cityselect.is(':visible');
    },

    toggleCityselect: function(state) {
        if (state === 'show') {
            PIN.System.UI.components.cityselect.fadeIn(300);
        } else if (state === 'hide') {
            PIN.System.UI.components.cityselect.fadeOut(300);
        }
    },

    togglePlaces: function(state) {
        if (state === 'show') {
            PIN.System.UI.components.places.fadeIn(300);
        } else if (state === 'hide') {
            PIN.System.UI.components.places.fadeOut(300);
        }
    },

    renderProjectList: function() {
        var projects = PIN.Application.appdata.projects,
            projectsListHtml = '';

        for (var project in projects) {
            projectsListHtml += '<li class="list__item"><a href="#" data-id="' 
                + projects[project].id + '" class="link">' 
                + projects[project].name
                + '</a></li>';
        }

        this.components.cityselect.html(projectsListHtml);
    },

    renderResultList: function() {
        console.log('renderResultList');

        var results = PIN.Application.appdata.resultList,
            resultListHtml = '';

        for (var result in results) {
            resultListHtml += '<li class="list__item">\n\
                <a href="#" data-id="' + results[result].id + '" class="link">' + results[result].name + '</a>\n\
            <li>';
        }

        this.components.places.html(resultListHtml);
    },

    clearResultList: function() {
        this.components.places.html('');
    },

    resetSearchInput: function() {
        this.components.address_address.val('');
    },

    setCityselectLinkLabel: function(label) {
        PIN.System.UI.components.show_cityselect.text(label);
    },

    markDefaultCityInCityselect: function(projectId) {
        PIN.System.UI.components.cityselect.find('.link').removeClass('link_current');
        PIN.System.UI.components.cityselect.find('.link[data-id=' + projectId + ']').addClass('link_current');
    },

    showFail: function(string) {
        // @todo show fail better
        alert(string);
    }

};