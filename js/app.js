$(function() {
    $('#address_address').focus();
    var map;

    //nsk
    //var projectId = 1;
    //var projectCentroid = [55.026472, 82.921475];
    //var projectZoomLevel = 13;
    //var projectName = 'Новосибирск';
    //---
    //msk
    var projectId = 32;
    var projectCentroid = [55.753466, 37.62017];
    var projectZoomLevel = 11;
    var projectName = 'Москва';

    //TODO: переделать эту схему с cityCenterData на projectList от вебапи!
    if( cityCenterData[detectedCity] ) {
        projectId = cityCenterData[detectedCity].id;
        projectCentroid = [cityCenterData[detectedCity].lat, cityCenterData[detectedCity].lon];
        projectZoomLevel = cityCenterData[detectedCity].zoom;
        projectName = cityCenterData[detectedCity].name;
        $('#show_cityselect').text(projectName);
    }

    var housesById = {};
    var popup;
    var projectsById = {};

    var sideBar = {

        expanded: false,

        expand: function() {
            resultPanel.collapse();
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
            $('.popup__content').not(id).hide();
            $('.popup').fadeIn(100);
            $(id).show();
            $(id).addClass('popup__content_open');
        },
        hide: function(){
            $('.popup__content').addClass('popup__content_close');
            setTimeout(function(){
                $('.popup__content').removeClass('popup__content_close');
                $('.popup').fadeOut(50);
                
            },300);
            setTimeout(function(){
                $('.popup__content').removeClass('popup__content_open');
            },350);
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

    $('.popup .social_result .icon').click(function(){
        lightbox.hide();
    });

    var selectPanel = {
        expand: function() {
            $('#sidebar').addClass('sidebar_select-panel_visible');
            $('#map').addClass('map_position_e');
            // костыль для корректного scroll
            $(window).resize();
        },

        collapse: function() {
             $('#sidebar').removeClass('sidebar_select-panel_visible');
             $('#map').removeClass('map_position_e');
        }
    };

    var resultPanel = {
        expanded: false,

        expand: function() {
            sideBar.collapse();
            $('#result').addClass('result_visible');
            $('#map').removeClass('map_position_b');
            $('#map').addClass('map_position_d');
            resultPanel.expanded = true;
        },

        collapse: function() {
            if (resultPanel.expanded) {
                $('#result').removeClass('result_visible');
                $('#map').removeClass('map_position_d');
                $('#map').addClass('map_position_b');
                $('.result__toggle').show();
                resultPanel.expanded = false;
            }
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
        makeMessage: function(rating, text) {
            return 'Теперь знаю рейтинг моего дома. Он ' + rating + '% и мне говорят: «' + text + '». А у вас как?';
        },

        url: 'http://pinrate.ru/',
        title: 'Инфраструктура и рейтинг дома — PIN RATE',
        image: 'http://pinrate.ru/i/pin.png',

        twiUrl: function(rating, text) {
            var msg = social.makeMessage(rating, text);
            return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(social.url) + '&text=' + encodeURIComponent(msg);
        },

        fbUrl: function(rating, text) {
            var msg = social.makeMessage(rating, text);
            //return 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(social.url)
            return 'http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent(social.title) + '&p[summary]=' + encodeURIComponent(msg) + '&p[url]=' + encodeURIComponent(social.url) + '&p[images][0]=' + encodeURIComponent(social.image);
        },

        vkUrl: function(rating, text) {
            var msg = social.makeMessage(rating, text);
            return 'http://vk.com/share.php?url=' + encodeURIComponent(social.url) + '&title=' + encodeURIComponent(msg);
        },


    };

    var notFound = $('.address__nothing-found');
    notFound.hide();

    $('#map').addClass('map_position_b');

    $('#sidebar_toggle').on('click', function() {
        selectPanel.collapse();
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
                house.name = stripCityFromAddress(house.name);
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

    function setProject(id) {

        if(id == projectId) return;

        projectId = id;

        project = projectsById[projectId];
        projectName = project.name;
        $('#show_cityselect').text(project.name);

        var point = parsePoint(project.centroid);

        console.log(project);
        console.log(point);

        map.setView([point.lon, point.lat], project.zoomlevel);
    }

    $('body').on('click', '.city_link', function(e) {
        e.preventDefault();

        setProject($(this).data('id'));
        /*projectId = $(this).data('id'); 


        project = projectsById[projectId];
        projectName = project.name;
        $('#show_cityselect').text(project.name);

        var point = parsePoint(project.centroid);

        console.log(project);
        console.log(point);

        map.setView([point.lon, point.lat], project.zoomlevel);*/
        selectPanel.collapse(); 
    });

    function showSidebar() {
        window.setTimeout(function() {
            sideBar.expand();
            //selectPanel.expand();
        }, 1000);
    }

    var mapOptions = {
        zoomControl: false
    };
        
    var tileUrlFormat = 'http://tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}';
    var urlFormatOptions = {
        subdomains: '0123'
    };

    map = L.map('map', mapOptions);
    L.tileLayer(tileUrlFormat, urlFormatOptions).addTo(map);
    map.setView(projectCentroid, projectZoomLevel);
    console.log('Map inited');

    //geolocation, bleat
    /*if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {

                //get project ID by coordinates
                var params = {
                        q: position.coords.longitude + ',' + position.coords.latitude,
                        key: api_key,
                        output: 'jsonp',
                        version: '1.3',
                        types: 'project'
                };
                $.getJSON('http://catalog.api.2gis.ru/geo/search?callback=?', params, function(data) {

                        if( data.response_code == '200' ) {
                            var id = data.result[0].project_id;
                            getProjects(function(err, projects) {
                                for (var i = 0; i < projects.length; i++) {
                                    var project = projects[i];
                                    projectsById[project.id] = project;
                                }

                                setProject(id);

                            });
                        }
                });
            },
            function(error) {
                console.log('Geolocation error', error);
            },
            {
                enableHighAccuracy: false,
                timeout:  10 * 1000 * 1000,
                maximumAge: 0
            }
        );
    }*/

    showSidebar();

    map.on('click', function(e) {
        var point = e.latlng;
        houseByPoint(point, function(err, house) {
            console.log('houseByPoint', err, house);
            
            if (err) {
                return err;
            }

            housesById[house.id] = house;
            house.name = stripCityFromAddress(house.name);

            var html = renderTemplate('callout', {house: house});

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

        var percent_searchesCompleted = 0,//поисков выполнено
            percent_totalSearches = 0;//всего поисков
        function writePercentage() {
            $('.pin-loader__percent').html(parseInt( 100 / percent_totalSearches * percent_searchesCompleted ) + '%');
        }

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

                        percent_searchesCompleted++;
                        writePercentage();

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

                    if(data.response_code == '200')
                        metro_coefficient = 10;                    

                    percent_searchesCompleted++;
                    writePercentage();

                    callback();
                });
            }
            searches.push(metroSearchFunction);
        }

        percent_totalSearches = searches.length; //количество добавленных поисков

        $("#preloader").show();
        $("#application").addClass('app_blured');
        writePercentage();

        async.series(searches, function() {
        //async.parallel(searches, function() {
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
            $('[data-role=rating_result]').html( rating + '%' );

            var description = '';

            placeMarkers(results, house);
            $('[data-role=rate_address]').html(house.name);
            if(special_labels[house.name] != undefined && projectId == 1) { //special labels for nsk
                description = special_labels[house.name];
                $('[data-role=rate_description]').html(description);
            } else {
                $.each(rating_labels, function(index, value) {
                    if(rating >= value.from && rating <= value.to) {
                        var labels = value.labels,
                            random = Math.floor(Math.random() * labels.length - 1) + 1;
                        description = labels[random];
                        $('[data-role=rate_description]').html(description);
                        return false;
                    }
                });
            }

            $("#preloader").hide();
            $("#application").removeClass('app_blured');

            $('.results-wrapper').css('top', $('#results-header').height()+70);

            selectPanel.collapse();
            sideBar.collapse();
            resultPanel.expand();

            activateSocialButtons(Math.round(rating), description);

            setTimeout(function() {
                //console.log('socialShown', $.cookie('socialShown'));
                if ($.cookie('socialShown') === undefined) {
                    $.cookie('socialShown', true, {expires: 365, path: '/'});
                    lightbox.show('[data-role=social-popup]');
                }
                
            }, 60000)
        });
    }

    function activateSocialButtons(rating, text) {
        $(".social__twi").attr('href', social.twiUrl(rating, text));
        $(".social__vk").attr('href', social.vkUrl(rating, text));
        $(".social__fb").attr('href', social.fbUrl(rating, text));
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
            maxClusterRadius: 100,
            spiderfyDistanceMultiplier: 1.5,
            iconCreateFunction: function(cluster) {
                return new L.DivIcon({html: '<div class="map__cluster">' + cluster.getChildCount() + '</div>'});
            }
        });

        

        //var markers = {};
        var markers = [];

        $.each(pinRubrics, function (pinIndex, pinValue) {
            if(firms[pinIndex].firms) {
                $.each(firms[pinIndex].firms, function (firmsIndex, firmsValue) {

                    //crutch - removing bank and atm icons
                    if( pinRubrics[pinIndex].idetify == 'icon_ATM' || pinRubrics[pinIndex].idetify == 'icon_bank' ) return;

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

                    var html = renderTemplate('firmCallout', {firm: firmsValue});
                    marker.bindPopup(html);
                    
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

        map.addLayer(firmMarkers);

        houseMarker.addTo(map);
    }
});