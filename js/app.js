$(function() {

    var map;
    var housesById = {};
    var popup;

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

    var notFound = $('.address__nothing-found');
    notFound.hide();

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

        notFound.hide();
        selectPanel.collapse();
        
        var query = $('#address_address').val();   
        console.log('Ready to search', query);

        search(query, function(err, houses) {
            console.log('search finished', houses);
            if (err) {
                notFound.show();
                return;
            }

            if (houses.length == 1) {
                var house = houses[0];
                calculateRating(house); 

            } else {
                var prefix = 'Новосибирск, ';

                for (var i = 0; i < houses.length; i++) {
                    var house = houses[i];
                    housesById[house.id] = house;
                    house.name = stripCityFromAddress(house.name);
                }

                var addressList = renderTemplate('addressList', {houses: houses});
                $('#places').html(addressList);    

                selectPanel.expand();            
            }
        });
    });

    $('body').on('click', '.address_link', function(e) {
        e.preventDefault();

        var geoId = $(this).data('id');
        console.log('address_link click', geoId, housesById); 

        var house = housesById[geoId];
        calculateRating(house);  
    });

    // 

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

    map.on('click', function(e) {
        var point = e.latlng;
        houseByPoint(point, function(err, house) {
            console.log('houseByPoint', err, house);
            
            if (err) {
                return err;
            }

            housesById[house.id] = house;
            house.name = stripCityFromAddress(house.name);

            var html = renderTemplate('callout', { house: house })

            popup = L.popup()
                .setLatLng(point)
                .setContent(html)
                .openOn(map);  

            $('.callout__button').on('click', function(e) {
                e.preventDefault();

                var geoId = $(this).data('id');
                console.log('callout__button click', geoId, housesById); 

                var house = housesById[geoId];

                calculateRating(house);  
                map.closePopup();
            }); 
        });
    });

    function stripCityFromAddress(address) {
        var prefix = 'Новосибирск, ';
        var hasPrefix = (address.slice(0, prefix.length) == prefix);

        if (hasPrefix) {
            return address.slice(prefix.length);
        } else {
            return address;
        }
    }

    function renderTemplate(template, data) {
        var templateSource = $('#' + template + 'Template').html();
        var template = Handlebars.compile(templateSource);
        return template(data);
    }

    function search(query, callback) {
        $.ajax({
            url: 'http://catalog.api.2gis.ru/geo/search',
            dataType: 'jsonp',
            data: {
                key: api_key,
                version: '1.3',
                q: query,
                project: 1,
                types: 'house',
                limit: 20,
                output: 'jsonp'
            }
        }).done(function(response) {
            if (response.response_code != 200) {
                callback(true);
            } else {
                callback(null, response.result);
            }
        });
    }

    function houseByPoint(point, callback) {
        var query = point.lng + ',' + point.lat;
        search(query, function(err, houses) {
            var house;

            if (!err && $.isArray(houses)) {
                house = houses[0];
            }

            callback(err, house);
        });
    }

    function calculateRating(house) {
        console.log('Calculating rating', house.centroid);

        var point_parsed = /POINT\((.*)\s(.*)\)/i.exec(house.centroid),
            point = point_parsed[1] + ',' + point_parsed[2];

        var searches = [];
        var results = [];
        $.each(pinRubrics, function(pinIndex, pinValue) {
            if(!results[pinIndex]) {
                results[pinIndex] = {
                    total: 0,
                    firms: []
                };
            }
            $.each(pinValue.rubrics, function(index, value) {

                var searchFunction = function(callback) {
                    var params = {
                        what: value,
                        point: point,
                        radius: pinValue.radius,
                        key: api_key,
                        output: 'jsonp',
                        page: 1,
                        pagesize: 50,
                        version: '1.3',
                        sort: 'relevance'
                    };
                    $.getJSON('http://catalog.api.2gis.ru/search?callback=?', params, function(data) {

                        results[pinIndex].total += data.response_code == '200' ? parseInt(data.total) : 0;
                        results[pinIndex].firms = data.result;

                        callback();
                    });
                }
                searches.push(searchFunction);

            });
        });

        $("#preloader").show();

        async.series(searches, function() {
            var rating = 0;
            $.each(pinRubrics, function(index, value) {                
                $( '.icon.' + pinRubrics[index].idetify + ' ~ span span' ).html( results[index].total );

                if(results[index].total > 0  && pinRubrics[index].inRating )
                    rating += 3.08;
            });

            $.each(pinRubrics, function(index, value) {
                if(results[index].total == 0 && pinRubrics[index].inRating )
                    rating *= pinRubrics[index].minus;
            });

            $.each(pinRubrics, function(index, value) {
                if(results[index].total > 1 && pinRubrics[index].inRating )
                    rating *= pinRubrics[index].plus;
            });

            rating = rating > 100 ? 100 : rating;
            $('#rating_result').html( Math.round(rating) + '%' );

            placeMarkers(results);

            $("#preloader").hide();

            selectPanel.collapse();
            sideBar.collapse();
            resultPanel.expand();
        });
    }
    
    function placeMarkers(firms) {
        
        var firmMarkers = new L.MarkerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 40,
            iconCreateFunction: function(cluster) {
                return new L.DivIcon({ html: '<div class="map__cluster">' + cluster.getChildCount() + '</div>' });
            }
        });

        map.addLayer(firmMarkers);
        
        $.each(pinRubrics, function (pinIndex, pinValue) {
            
            if(firms[pinIndex].firms) {
                $.each(firms[pinIndex].firms, function (firmsIndex, firmsValue) {

                    var icon = L.divIcon({
                        //iconUrl: '/assets/map/marker.png',
                        //shadowUrl: '/assets/map/marker-shadow.png',
                        iconSize: [47, 47],
                        //shadowSize: [36, 12],
                        iconAnchor: [12, 40],
                        //shadowAnchor: [18, 10],
                        className: 'map__marker',
                        html: '<div class="icon ' + pinRubrics[pinIndex].idetify + '"></div>'
                    }),
                    markerPosition = [firmsValue.lat, firmsValue.lon],
                    markerOptions = {
                        icon: icon,
                        draggable: false
                    };

                    var marker = L.marker(markerPosition, markerOptions);
                    firmMarkers.addLayer(marker);
                });
            }
        });
        
        
        
    }
});