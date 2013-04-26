$(function() {

    var map;

    var sideBar = {

        expanded: false,

        expand: function() {
            $('#sidebar').addClass('sidebar_visible');
            $('#map').removeClass('map_position_b');
            $('#map').addClass('map_position_c');
            sideBar.expanded = true;
        },

        collapse: function() {
            $('#sidebar').removeClass('sidebar_visible');
            $('#map').removeClass('map_position_c');
            $('#map').addClass('map_position_b');
            sideBar.expanded = false;
        },

        toggle: function() {
            if (sideBar.expanded) {
                sideBar.collapse();
            } else {
                sideBar.expand();
            }
        }
    };

    var selectPanel = {
        expand: function() {
            $('#sidebar').addClass('sidebar_select-panel_visible');
        },

        collapse: function() {
             $('#sidebar').removeClass('sidebar_select-panel_visible');
        }
    };

    var resultPanel = {
        expand: function() {
            $('#result').addClass('result_visible');
        },

        collapse: function() {
            $('#result').removeClass('result_visible');
        }
    };

    $('#map').addClass('map_position_b');

    window.setTimeout(function() {
        sideBar.expand();
        //selectPanel.expand();
    }, 1000);

    $('#sidebar_toggle').on('click', function() {
        sideBar.toggle();       
    });

    $('#address_form').on('submit', function(e) {
        e.preventDefault();
        
        var query = $('#address_address').val();   
        console.log('Ready to search', query);

        search(query, function(err, houses) {
            console.log('search finished', houses);

            var prefix = 'Новосибирск, ';

            for (var i = 0; i < houses.length; i++) {
                var house = houses[i];
                var hasPrefix = (house.name.slice(0, prefix.length) == prefix);

                if (hasPrefix) {
                    house.name = house.name.slice(prefix.length);
                }
            }

            var addressList = renderTemplate('addressList', { houses: houses });
            $('#places').html(addressList);

            selectPanel.expand();
        });
    });

    $('body').on('click', '.address_link', function(e) {
        e.preventDefault();

        console.log('address_link click');
        var geoId = $(this).data('id');  
        calculateRating(geoId);  
    });

    var mapOptions = {
        zoomControl: false
    };
        
    var tileUrlFormat = 'http://tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}';
    var urlFormatOptions = {
        subdomains: '0123'
    };

    map = L.map('map', mapOptions);
    L.tileLayer(tileUrlFormat, urlFormatOptions).addTo(map);
    map.setView([55.026472, 82.921475], 13);
    console.log('Map inited');


    function renderTemplate(template, data) {
        var templateSource = $('#' + template + 'Template').html();
        var template = Handlebars.compile(templateSource);
        return template(data);
    }

    function search(query, callback) {
        // http://catalog.api.2gis.ru/geo/search
        $.ajax({
            url: 'http://catalog.api.2gis.ru/geo/search',
            dataType: 'jsonp',
            data: {
                key: 1,
                version: '1.3',
                q: query,
                project: 1,
                types: 'house',
                limit: 20,
                output: 'jsonp'
            }
        }).done(function(response) {
            callback(null, response.result);
        });
    }

    function calculateRating(geoId) {
        console.log('Calculating rating', geoId);
        selectPanel.collapse();
        sideBar.collapse();
        resultPanel.expand();
    }
});