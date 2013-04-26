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

    $('#map').addClass('map_position_b');

    window.setTimeout(function() {
        sideBar.expand();
    }, 1000);

    $('#sidebar_toggle').on('click', function() {
        sideBar.toggle();       
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


    function request() {

    }
});