$(function() {

    var map;
    var projectId = 1;
    var projectName = 'Новосибирск';
    var housesById = {};
    var popup;
    var projectsById = {};

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

    var lightbox = {
        show: function(id){
            $('.popup').fadeIn(200);
            $('.popup__content').not(id).hide();
            $(id).show();
        },
        hide: function(){
            $('.popup').fadeOut(200);
            $('.popup__content').hide();
        }
    }

    $('[data-role=show-popup]').click(function(){
        var curPopup = $(this).attr('data-popup');
        lightbox.show('[data-role='+ curPopup +']');
        return false;
    });

    $('[data-role=close-popup]').click(function(){
        lightbox.hide();
        return false;
    });

    var selectPanel = {
        expand: function() {
            $('#sidebar').addClass('sidebar_select-panel_visible');
        },

        collapse: function() {
             $('#sidebar').removeClass('sidebar_select-panel_visible');
        }
    };

    var resultPanel = {
        expanded: false,

        expand: function() {
            $('#result').addClass('result_visible');
            resultPanel.expanded = true;
        },

        collapse: function() {
            $('#result').removeClass('result_visible');
            resultPanel.expanded = false;
        },

        toggle: function() {
            if (resultPanel.expanded) {
                resultPanel.collapse();
            } else {
                resultPanel.expand();
            }   
        }
    };

    var social = {
        makeMessage: function(rating) {
            return 'Рейтинг дома ' + rating + '%. Узнай свой рейтинг с помощью Pinrate'
        },

        url: 'http://pinrate.ru/',

        twiUrl: function(rating) {
            var msg = social.makeMessage(rating);
            return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(social.url) + '&text=' + encodeURIComponent(msg);
        },

        fbUrl: function(rating) {
            return 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(social.url)
        },

        vkUrl: function(rating) {
            var msg = social.makeMessage(rating);
            return 'http://vk.com/share.php?url=' + encodeURIComponent(social.url) + '&title=' + encodeURIComponent(msg);
        },


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

    $('#result_toggle').on('click', function() {
        resultPanel.toggle();       
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
                for (var i = 0; i < houses.length; i++) {
                    var house = houses[i];
                    housesById[house.id] = house;
                    house.name = stripCityFromAddress(house.name);
                }

                var addressList = renderTemplate('addressList', {houses: houses});
                $('#cityselect').html('');
                $('#places').html(addressList);    

                selectPanel.expand();            
            }
        });
    });

    $('#show_cityselect').on('click', function(e) {
        e.preventDefault();

        getProjects(function(err, projects) {
            for (var i = 0; i < projects.length; i++) {
                var project = projects[i];
                projectsById[project.id] = project;
            }

            var projectList = renderTemplate('projectList', {projects: projects});
            $('#places').html('');  
            $('#cityselect').html(projectList);    

            selectPanel.expand(); 
        });
    });

    $('body').on('click', '.address_link', function(e) {
        e.preventDefault();

        var geoId = $(this).data('id');
        console.log('address_link click', geoId, housesById); 

        var house = housesById[geoId];
        calculateRating(house);  
    });

    $('body').on('click', '.city_link', function(e) {
        e.preventDefault();

        projectId = $(this).data('id'); 


        project = projectsById[projectId];
        projectName = project.name;
        $('#show_cityselect').text(project.name);

        var point = parsePoint(project.centroid);

        console.log(project);
        console.log(point);

        map.setView([point.lon, point.lat], project.zoomlevel);
        selectPanel.collapse(); 
    });

    // .select-panel__list_cityselect .list__item

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

            var html = renderTemplate('callout', {house: house})

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
        var prefix = projectName + ', ';
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
                project: projectId,
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

    function parsePoint(pointString) {
        var pointParsed = /POINT\((.*)\s(.*)\)/i.exec(pointString);
        return {
            lon: pointParsed[2], 
            lat: pointParsed[1]
        };
    }

    function calculateRating(house) {
        console.log('Calculating rating', house);

        var point_parsed = parsePoint(house.centroid),
            point = point_parsed.lat + ',' + point_parsed.lon;

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

        var metro_coefficient = 0;
        if( $.inArray(projectId, metro_projects) ) {
            var metroSearchFunction = function(callback) {
                var params = {
                    q: point,
                    radius: 250,
                    key: api_key,
                    types: 'metro',
                    output: 'jsonp',
                    version: '1.3'
                };
                $.getJSON('http://catalog.api.2gis.ru/geo/search?callback=?', params, function(data) {

                    console.log(data);
                    if(data.response_code == '200')
                        metro_coefficient = 10;
                    else
                        metro_coefficient = -10;

                    callback();
                });
            }
            searches.push(metroSearchFunction);
        }


        $("#preloader").show();
        $("#application").addClass('app_blured');

        //async.series(searches, function() {
        async.parallel(searches, function() {
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

            rating += metro_coefficient;

            rating = rating > 100 ? 100 : Math.round(rating);
            $('#rating_result').html( rating + '%' );

            placeMarkers(results, house);
            $('#rate_address').html(house.name);
            if(special_labels[house.name]) {
                $('#rate_description').html(special_labels[house.name]);
            } else {
                $.each(rating_labels, function(index, value) {
                    if(rating >= value.from && rating <= value.to) {
                        var labels = value.labels,
                            random = Math.floor(Math.random() * labels.length - 1) + 1;
                        $('#rate_description').html(labels[random]);
                        return false;
                    }
                });
            }

            $("#preloader").hide();
            $("#application").removeClass('app_blured');

            selectPanel.collapse();
            sideBar.collapse();
            resultPanel.expand();

            activateSocialButtons(Math.round(rating));

            setTimeout(function() {
                console.log('socialShown', $.cookie('socialShown'));
                if ($.cookie('socialShown') === undefined) {
                    $.cookie('socialShown', true, { expires: 365, path: '/' });
                    lightbox.show('[data-role=social-popup]');
                }
                
            }, 2000)
        });
    }

    function activateSocialButtons(rating) {
        $(".social__twi").attr('href', social.twiUrl(rating));
        $(".social__vk").attr('href', social.vkUrl(rating));
        $(".social__fb").attr('href', social.fbUrl(rating));
    }

    function getProjects(callback) {
        $.ajax({
            url: 'http://catalog.api.2gis.ru/project/list',
            dataType: 'jsonp',
            data: {
                key: api_key,
                version: '1.3',
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

    var firmMarkers;
    var houseMarker;

    
    function placeMarkers(firms, house) {

        // Удаление старых маркеров
        if (firmMarkers) {
            map.removeLayer(firmMarkers);
        }

        if (houseMarker) {
            map.removeLayer(houseMarker);
        }

        var houseIcon = L.divIcon({
                iconSize: [45, 36],
                iconAnchor: [12, 40],
                className: 'map__marker',
                html: '<div class="icon_pinrate_map"></div>'
            }),
            housePosition = parsePoint(house.centroid),
            houseMarkerPosition = [housePosition.lon, housePosition.lat],
            houseMarkerOptions = {
                icon: houseIcon,
                draggable: false
            };

        houseMarker = L.marker(houseMarkerPosition, houseMarkerOptions);

        map.panTo(houseMarkerPosition);

        firmMarkers = new L.MarkerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 50,
            iconCreateFunction: function(cluster) {
                return new L.DivIcon({html: '<div class="map__cluster">' + cluster.getChildCount() + '</div>'});
            }
        });

        map.addLayer(firmMarkers);

        //var markers = {};
        var markers = [];

        $.each(pinRubrics, function (pinIndex, pinValue) {
            if(firms[pinIndex].firms) {
                $.each(firms[pinIndex].firms, function (firmsIndex, firmsValue) {

                    var img_ident = /icon_(.*)/.exec(pinRubrics[pinIndex].idetify);
                    var icon = L.divIcon({
                        iconSize: [32, 37],
                        iconAnchor: [12, 40],
                        className: 'map__marker',
                        html: '<div class="map_icon" style="background: url(/i/markers/'+ img_ident[1] +'.png);"></div>'
                    }),
                    markerPosition = [firmsValue.lat, firmsValue.lon],
                    markerOptions = {
                        icon: icon,
                        draggable: false
                    };

                    var marker = L.marker(markerPosition, markerOptions);
                    
                    /*if( markers[firmsValue.lat + ' ' + firmsValue.lon] && Math.random() > 0.5 ) {
                        markers[firmsValue.lat + ' ' + firmsValue.lon] = marker;
                    } else {
                        markers[firmsValue.lat + ' ' + firmsValue.lon] = marker;
                    }*/
                    markers.push(marker);
                });
            }
        });
        
        $.each(markers, function (index, marker) {
            firmMarkers.addLayer(marker);
        });

        houseMarker.addTo(map);
    }
});