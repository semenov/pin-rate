<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <title>Инфраструктура и рейтинг дома — PIN RATE</title>

    <!-- styles -->
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />
    <!--[if lte IE 8]><link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.ie.css" /><![endif]-->
    <link rel="stylesheet" href="css/MarkerCluster.css" />
    <link rel="stylesheet" href="css/pinrate.css" media="all" />
    <link rel="stylesheet" href="css/baron.css" media="all" />

    <link rel="icon" type="image/png" href="i/favicon.png" />

    <?php
		/**
		 * Dev mode
		 */
		$devmode = !empty($_GET['debug']) ? $_GET['debug'] : false;
		$devip = !empty($_GET['devip']) ? $_GET['devip'] : '';

		/**
		 * Try to get location via GeoIP
		 */
		require_once('backend/sxgeo/SxGeo.php');

		$sxgeo = new SxGeo('backend/sxgeo/SxGeoCity.dat', SXGEO_BATCH | SXGEO_MEMORY);
		if ($devmode & $devip) {
			$reqIP = $devip;
		} else {
			$reqIP = $_SERVER['REMOTE_ADDR'];
		}
		$result = $sxgeo->get($reqIP);


		if ($result['city']) {
			$cyr  = array('а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у', 
		        'ф','х','ц','ч','ш','щ','ъ','ь', 'ю','я','А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У',
		        'Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ь', 'Ю','Я');
	        $lat = array( 'a','b','v','g','d','e','zh','z','i','y','k','l','m','n','o','p','r','s','t','u',
		        'f' ,'h' ,'ts' ,'ch','sh' ,'sh' ,'a' ,'y' ,'yu' ,'ya','A','B','V','G','D','E','Zh',
		        'Z','I','Y','K','L','M','N','O','P','R','S','T','U',
		        'F' ,'H' ,'Ts' ,'Ch','Sh' ,'Sht' ,'A' ,'Y' ,'Yu' ,'Ya');
			$city = str_replace($cyr, $lat, $result['city']);
			$city = strtolower($city);
		} elseif ($result['country'] == 'KZ') {
			$city = 'almaty';
		} else {
			$city = 'NOT_FOUND';
		}
	?>
    <script>var detectedCity = '<?php echo($city); ?>';</script>

    <?php if(!empty($_GET['debug'])) { ?>
    <!--script src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script-->
    <script src="js/leaflet.js"></script>
    <script src="js/leaflet.markercluster.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/jquery.placeholder.min.js"></script>
    <script src="js/async.js"></script>
    <script src="js/handlebars.js"></script>
    <script src="js/baron.min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/app.js"></script>
    <?php } else { ?>
    <script src="min/b=js&f=leaflet.js,leaflet.markercluster.js,jquery.min.js,jquery.cookie.js,jquery.placeholder.js,async.js,handlebars.js,baron.min.js,config.js,app.js"></script>
    <?php } ?>
    <script>
        $(document).ready(function() {
            baron({
                scroller: $('.baron-scroller'),
                bar: '.baron-scroller__bar',
                barOnCls: 'baron-scroller_state_on'
            });
        });
    </script>

    
</head>
<body>
    <div id="preloader" style="">
        <i class="pin-loader__center"></i>
        <i class="pin-loader__ring"></i>
    </div>

    <!-- application -->
    <div class="application" id="application">

        <!-- sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar__in">
                <span class="sidebar__toggle" id="sidebar_toggle">
                    <ins class="icon icon_toggle"></ins>
                </span>

                <div class="logo logo_pinrate">
                    <ins class="logo__icon icon icon_pinrate"></ins>
                    <h1 class="logo__text">PIN RATE</h1>
                </div>

                <span class="slogan slogan_pinrate">Рейтинг дома</span>

                <form action="#" class="address-form" id="address_form">
                    <ul class="address">
                        <li class="address__item address__item_city">
                            <a href="#" class="link link_cityselect" id="show_cityselect">Москва</a>
                        </li>
                        <li class="address__item address__item_address">
                            <input type="text" name="address_address" id="address_address" class="input input_text" placeholder="Улица, дом" autocomplete="off" />
                        </li>
                        <li class="address__item address__item_submit">
                            <a href="#" onclick="$('#address_form').submit();" id="address_submit" class="address__submit">Узнать рейтинг дома</a>
                        </li>
                        <li class="address__nothing-found">Ничего не найдено</li>
                    </ul>
                </form>

                <ul class="authors">
                    <li class="authors__author authors__author_24ds">
                        <a href="https://twitter.com/24ds" target="_blank" title="Твиттер" class="link">Евгений Чертенков</a>
                    </li>
                    <li class="authors__author authors__author_dmitrienkop">
                        <a href="" data-role="show-popup" data-popup="authors-popup" title="Мой Круг" class="link">О проекте</a>
                    </li>
                </ul>
            </div>

            <div class="sidebar__select-panel select-panel" id="select_panel">
                <div class="select-panel__in">
                    <div class="baron-wrapper">
                        <div class="baron-scroller">
                            <div class="baron-container">
                                <ul class="select-panel__list select-panel__list_cityselect list" id="cityselect"></ul>
                                <ul class="select-panel__list select-panel__list_places list" id="places">
                                </ul>
                            </div>

                            <div class="baron-scroller__bar baron-scroller__bar_state_on"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="map" id="map"></div>

        <div class="result" id="result">
            <div class="result__in">
                <span class="result__toggle" id="result_toggle">
                    <icon class="icon icon_toggle"></icon>
                </span>
                <div id="results-header" class="result__header">    
                    <div class="rate">
                        <h2 data-role="rating_result" class="rate__in">87%</h2>
                        <span class="rate__address" data-role="rate_address"></span>
                        <span class="rate__description" data-role="rate_description">Хороший дом!</span>
                    </div>

                    <ul class="social social_result">
                        <li class="social__item"><a href="#" title="Поделиться в Twitter" class="social__link social__twi" target="_blank"><ins class="icon icon_twitter"></ins></a></li>
                        <li class="social__item"><a href="#" title="Поделиться Вконтакте" class="social__link social__vk" target="_blank"><ins class="icon icon_vk"></ins></a></li>
                        <li class="social__item"><a href="#" title="Поделиться в Facebook" class="social__link social__fb" target="_blank"><ins class="icon icon_facebook"></ins></a></li>
                    </ul>
                </div>

                <div class="results-wrapper">
                    <div class="baron-wrapper">
                        <div class="baron-scroller">
                            <div class="baron-container">
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_bank"></ins><span class="results__label">Банки&nbsp;&nbsp;<span>6</span></span></li>
                                    <li class="results__item"><ins class="icon icon_ATM"></ins><span class="results__label">Банкоматы&nbsp;&nbsp;<span>21</span></span></li>
                                    <li class="results__item"><ins class="icon icon_housing-department"></ins><span class="results__label">ЖЭУ&nbsp;&nbsp;<span>2</span></span></li>
                                    <li class="results__item"><ins class="icon icon_barber"></ins><span class="results__label">Парикма-кие&nbsp;&nbsp;<span>3</span></span></li>
                                    <li class="results__item"><ins class="icon icon_post-office"></ins><span class="results__label">Почта&nbsp;&nbsp;<span>1</span></span></li>
                                    <li class="results__item"><ins class="icon icon_parking"></ins><span class="results__label">Стоянки&nbsp;&nbsp;<span>2</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_pharmacy"></ins><span class="results__label">Аптеки&nbsp;&nbsp;<span>56</span></span></li>
                                    <li class="results__item"><ins class="icon icon_health"></ins><span class="results__label">Больницы&nbsp;&nbsp;<span>2</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_taproom"></ins><span class="results__label">Бары&nbsp;&nbsp;<span>34</span></span></li>
                                    <li class="results__item"><ins class="icon icon_diningroom"></ins><span class="results__label">Кафе&nbsp;&nbsp;<span>5</span></span></li>
                                    <li class="results__item"><ins class="icon icon_confectionery"></ins><span class="results__label">Конди-кие&nbsp;&nbsp;<span>1</span></span></li>
                                    <li class="results__item"><ins class="icon icon_coffeehouse"></ins><span class="results__label">Кофейни&nbsp;&nbsp;<span>4</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_swimming-pool"></ins><span class="results__label">Бассейны&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_sports-school"></ins><span class="results__label">Спортшколы&nbsp;&nbsp;<span>3</span></span></li>
                                    <li class="results__item"><ins class="icon icon_stadium"></ins><span class="results__label">Стадионы&nbsp;&nbsp;<span>2</span></span></li>
                                    <li class="results__item"><ins class="icon icon_fitness-center"></ins><span class="results__label">Фитнес&nbsp;&nbsp;<span>4</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_education"></ins><span class="results__label">Образование&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_kindergarten"></ins><span class="results__label">Детсад&nbsp;&nbsp;<span>3</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_bowling"></ins><span class="results__label">Боулинги&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_cinema"></ins><span class="results__label">Кинотеатры&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_park"></ins><span class="results__label">Парки&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_theater"></ins><span class="results__label">Театры&nbsp;&nbsp;<span>3</span></span></li>
                                </ul>
                                <ul class="results">
                                    <li class="results__item"><ins class="icon icon_hypermarket"></ins><span class="results__label">Гипермаркеты&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_grocery"></ins><span class="results__label">Продуктовые&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_supermarket"></ins><span class="results__label">Супермаркеты&nbsp;&nbsp;<span>4</span></span></li>
                                    <li class="results__item"><ins class="icon icon_shopping-center"></ins><span class="results__label">ТЦ&nbsp;&nbsp;<span>3</span></span></li>
                                </ul>
                            </div>

                            <div class="baron-scroller__bar baron-scroller__bar_state_on"></div>
                        </div>
                    </div>   
                </div>
            </div>
            <div class="api-copyright">
                <a href=""><i class="api-copyright__icon"></i></a>Сайт работает на <a href="http://api.2gis.ru" target="_blank">API 2GIS</a>
            </div>
            <div class="map-copyright">
                <a href="http://api.2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners" target="_blank" class="map-copyright__work"></a><br/>
                <a href="http://help.2gis.ru/licensing-agreement/" target="_blank" class="map-copyright__license"></a>
                <a href="http://2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners" target="_blank" class="map-copyright__logo"></a>
            </div>
        </div>

    </div>
    <div class="popup">
        <div class="popup__content" data-role="authors-popup">
            <a href="#" data-role="close-popup" class="icon icon icon_close-popup">Закрыть</a>
            <div class="popup__about">
                <h2>О проекте</h2>
                <p class="popup__about-text">
                    Pin Rate &mdash; это рейтинг домов. Неофициальный, но близкий к реальности.<br/>
                    Мы сами не знаем как оно так точно считает, поэтому нам страшно.<br/>
                    Если обидели, то напишите нам. В ответе признаемся, что ваш дом самый лучший.
                </p>
                <h2>Команда</h2>
                <dl class="authors__list popup__about-text">
                    <dt><a href="">Евгений Чертенков</a></dt>
                    <dd>Дизайн</dd>
                    <dt><a href="">Игорь Кривчун</a></dt>
                    <dd>backend</dd>
                    <dt><a href="">Влад Семенов</a></dt>
                    <dd>backend</dd>
                    <dt><a href="">Петр Дмитриенко</a></dt>
                    <dd>frontend</dd>
                    <dt><a href="">Евгений Окатьев</a></dt>
                    <dd>forntend магия</dd>
                    <dt><a href="">Дмитрий Кузнецов</a></dt>
                    <dd>frontend</dd>
                    <dt><a href="">Сергей Коломенкин</a></dt>
                    <dd>менеджер</dd>
                    <dt><a href="">Дина Березина</a></dt>
                    <dd>аналитик</dd>
                </dl>
                <p>По любым вопросам обращайтесь по адресу <a href="mailto: wassup@pinrate.ru">wassup@pinrate.ru</a></p>
            </div>
        </div>
        <div class="popup__content" data-role="social-popup">
            <!--<a href="#" data-role="close-popup" class="icon icon icon_close-popup">Закрыть</a>-->
            <p class="popup__about-text popup__about-text_big">
                    Расскажите своим друзьям про Pin Rate.<br/>(и да будут вам лучи почёта от нашей команды)
            </p>
            <!--<div class="rate rate_white">
                <h2 data-role="rating_result" class="rate__in">87%</h2>
                <span class="rate__description" data-role="rate_description">Хороший дом!</span>
            </div>-->
            <ul class="social_result">
                <li class="social__item">
                    <a href="" class="link link_twitter social__twi" target="_blank">
                        <ins class="icon ico_twitter-share"></ins>
                    </a>
                </li>
                <li class="social__item">
                    <a href="" class="link link_facebook social__fb" target="_blank">
                        <ins class="icon ico_facebook-share"></ins>
                    </a>
                </li>
                <li class="social__item">
                    <a href="" class="link link_vk social__vk" target="_blank">
                        <ins class="icon ico_vk-share"></ins>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <script id="addressListTemplate" type="text/x-handlebars-template">
        {{#each houses}}
            <li class="list__item"><a href="#" class="link address_link" data-id="{{id}}">{{name}}</a></li>
        {{/each}}
    </script>

    <script id="projectListTemplate" type="text/x-handlebars-template">
        {{#each projects}}
            <li class="list__item"><a href="#" class="link city_link" data-id="{{id}}">{{name}}</a></li>
        {{/each}}
    </script>

    <script id="calloutTemplate" type="text/x-handlebars-template">
        <div class="callout">
            {{#if house.name}}
                <div class="callout__title">{{house.name}}</div>
            {{/if}}
            <div class="callout__button" data-id="{{house.id}}">Узнать рейтинг</div>
        </div>
    </script>

    <script id="firmCalloutTemplate" type="text/x-handlebars-template">
        <div class="callout">
            <div>{{firm.name}}</div>
        </div>
    </script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter21122095 = new Ya.Metrika({id:21122095,
                        webvisor:true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true});
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="//mc.yandex.ru/watch/21122095" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</body>
</html>