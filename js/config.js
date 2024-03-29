var pinRubrics = [
    {
        name: 'ЖЕУ',
        rubrics: [
            'Жилищно-коммунальные услуги'
        ],
        radius: 300,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_housing-department'
    },
    {
        name: 'Почта',
        rubrics: [
            'Почтовые отделения'
        ],
        radius: 1000,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_post-office'
    },
    {
        name: 'Банки',
        rubrics: [
            'Банки'
        ],
        radius: 700,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_bank'
    },
    {
        name: 'Банкоматы',
        rubrics: [
            'Банкоматы'
        ],
        radius: 500,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_ATM'
    },
    {
        name: 'Парикмахерские',
        rubrics: [
            'Парикмахерские'
        ],
        radius: 700,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_barber'
    },
    {
        name: 'Стоянки',
        rubrics: [
            'Автостоянки'
        ],
        radius: 700,
        plus: 1.1,
        minus: 1,
        inRating: false,
        idetify: 'icon_parking'
    },
    {
        name: 'Аптеки',
        rubrics: [
            'Аптеки'
        ],
        radius: 350,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_pharmacy'
    },
    {
        name: 'Больницы',
        rubrics: [
            'Поликлиники детские',
            'Многопрофильные медицинские центры',
            'Поликлиники взрослые',
            'Стоматологические поликлиники',
            'Стоматологические центры'
        ],
        radius: 700,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_health'
    },
    {
        name: 'Бары',
        rubrics: [
            'Бары'
        ],
        radius: 800,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_taproom'
    },
    {
        name: 'Кафе',
        rubrics: [
            'Кафе'
        ],
        radius: 800,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_diningroom'
    },
    {
        name: 'Кондитерские',
        rubrics: [
            'Кафе-кондитерские / Кофейни'
        ],
        radius: 800,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_confectionery'
    },
    {
        name: 'Кофейни',
        rubrics: [
            'Кафе-кондитерские / Кофейни'
        ],
        radius: 800,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_coffeehouse'
    },
    {
        name: 'Бассейны',
        rubrics: [
            'Бассейны'
        ],
        radius: 800,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_swimming-pool'
    },
    {
        name: 'Спортшколы',
        rubrics: [
            'Спортивные школы'
        ],
        radius: 800,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_sports-school'
    },
    {
        name: 'Фитнес',
        rubrics: [
            'Фитнес-клубы'
        ],
        radius: 800,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_fitness-center'
    },
    {
        name: 'Стадионы',
        rubrics: [
            'Стадионы'
        ],
        radius: 800,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_stadium'
    },
    {
        name: 'Образование',
        rubrics: [
            'Школы'
        ],
        radius: 700,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_education'
    },
    {
        name: 'Детские сады',
        rubrics: [
            'Детские сады / Ясли'
        ],
        radius: 400,
        plus: 1,
        minus: 0.9,
        inRating: true,
        idetify: 'icon_kindergarten'
    },
    {
        name: 'Боулинг',
        rubrics: [
            'Боулинг'
        ],
        radius: 900,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_bowling'
    },
    {
        name: 'Кино',
        rubrics: [
            'Кинотеатры'
        ],
        radius: 900,
        plus: 1.1,
        minus: 1,
        inRating: true,
        idetify: 'icon_cinema'
    },
    {
        name: 'Парки',
        rubrics: [
            'Парки культуры и отдыха'                        
        ],
        radius: 2000,
        plus: 1.1,
        minus: 1,
        inRating: false,
        idetify: 'icon_park'
    },
    {
        name: 'Театры',
        rubrics: [
            'Театры'                        
        ],
        radius: 2000,
        plus: 1.1,
        minus: 1,
        inRating: false,
        idetify: 'icon_theater'
    },
    {
        name: 'Гипермаркеты',
        rubrics: [
            'Гипермаркеты'                        
        ],
        radius: 2000,
        plus: 1,
        minus: 1,
        inRating: false,
        idetify: 'icon_hypermarket'
    },
    {
        name: 'Продукты',
        rubrics: [
            'Продовольственные магазины'
        ],
        radius: 400,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_grocery'
    },
    {
        name: 'Супермаркеты',
        rubrics: [
            'Супермаркеты'                        
        ],
        radius: 1000,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_supermarket'
    },
    {
        name: 'Торговые центры',
        rubrics: [
            'Торговые центры'
        ],
        radius: 1000,
        plus: 1,
        minus: 1,
        inRating: true,
        idetify: 'icon_shopping-center'
    }

];
var api_key = 'rudvjt8277';
var rating_labels = [
    {
        from: 0,
        to: 5,
        labels: [
            'Дыра. Не чёрная. Просто дыра',
            'На дне',
            'Всё тлен'
        ]
    },
    {
        from: 6,
        to: 30,
        labels: [
            'Пора валить',
            'Аэропорт близко. Вы знаете, что делать',
            'Повезёт в любви',
            'Может лучше ипотеку взять?',
            'Коробка из под холодильника?',
            'facepalm.jpg',
            'Не унывай!',
            'Днище, да?',
            'Это гараж?',
            'Отличная конура',
            'Биологическое отверстие мира',
            'Думай о хорошем',
            'Вот это сила воли',
            'Турист? А чего в палатке живёшь?',
            'Ну… лучше, чем ничего',
            'Нет времени объяснять — беги',
            'Не выходи из интернета. Там лучше'
        ]
    },
    {
        from: 31,
        to: 50,
        labels: [
            'Потянет',
            'So-So',
            'Бывает и лучше',
            'Зато человек хороший',
            'Задумайся',
            'Бывает и лучше',
            'Сойдёт для дауншифтинга',
            'Начинай копить',
            'Keep calm and keep calm',
            'Может потом повезёт?',
        ]
    },
    {
        from: 51,
        to: 70,
        labels: [
            'Хорошо живёшь!',
            'Везёт кому-то',
            'Дома хорошо, а у вас лучше',
            'Класс!',
            'Красиво живёте',
            'Красаучик!',
            'Так держать',
            'Ого!',
            'В гости позовете?',
            'Нет места милее',
            'Ах, какой дом',
            'Завидуем',
            'Кучеряво!'
        ]
    },
    {
        from: 71,
        to: 80,
        labels: [
            'Высшая лига',
            'Как в лотерею выиграть',
            'Праздник какой-то',
            'Хорошие инвестиции',
            'Здорово, великолепно!',
            'Дичайше моднейше, например',
            'Отличное местечко, поздравляем!',
        ]
    },
    {
        from: 81,
        to: 99,
        labels: [
            'Дайте две',
            'Огонь!',
            'Хоромы',
            'Всем бы так',
            'Более лучше некуда',
            'Попёрло!',
            'Шик и вот это всё',
            'Во куркуль!',
            'Круче только яйца',
            'Это леген... погодите... дарно!',
            'Воу-воу, палехче!'
        ]
    },
    {
        from: 100,
        to: 100,
        labels: [
            'Король мира, ну',
            'Мы хотим от тебя сына'
        ]
    }
];
var special_labels = {
    '1' : {
        'Вокзальная магистраль, 3':	'White house',
        'Переездная (Заельцовский), 64/1':	'На 4-ку',
        'Вавилова, 3':	'Дача лучше',
        'Сухарная, 101/1':	'Своих не бросим',
        'Титова, 11/1':	'Успех!',
        'Высоцкого, 52':	'Улётно!',
        'Герцена, 6':	'Воооот',
        'Челюскинцев, 4':	'Минчи одобряет',
        'Горский микрорайон, 65':	'Гайз!',
        'Горский микрорайон, 69':	'Гайз!',
        'Добролюбова, 132':	'fckn house',
        'Советская, 49 / Вокзальная магистраль, 19':	'Вот это всё',
        'Крылова, 45':	'Да вы ж котятки',
        'Кирова, 27/3':	'Кудряво!',
        'Челюскинцев, 15/1':	'Фотодом',
        'Мусы Джалиля, 3/1':	'Закаты ЗБС',
        'Академика Лаврентьева проспект, 6/1':	'Wow',
        'Громова, 17/2':	'Зато какой дизайн!',
        'Громова, 17':	'Зато какой дизайн!',
        'Красный проспект, 36':	'О-ооо-ОООО-ооо!',
        'Дмитрия Шамшурина, 43': '',
        'Красный проспект, 34 / Щетинкина, 41':	'Вообще-то 146%',
        'Ватутина, 107':	'Икея не вывозит',
        'Военная, 5':	'Да, можно жить',
        'Карла Маркса площадь, 7':	'Огонь!',
        'Фрунзе, 88' : 'Космический дворец',
        'Октябрьская, 35' : 'Пи…пи…пирствшно', //НТК
        'Красный проспект, 77 / Писарева, 10' : 'В гостях хорошо, а дома интернет', //CC
        'Голубой Залив, Удачная, 5' : 'Рейтинг ошибся, тут 100', //ABC
        'Экваторная, 18': 'Зато вокруг лес',
        'Ленина, 12' : 'И без нас придумают заголовок' //НГС
    },
    '32' : {
        '1905 года, 7 к1 / Звенигородское шоссе, 1' : 'Самизнаетекакой', //Студия лебедева 
        'Льва Толстого, 16' : 'Посмотрите в Яндексе', //Яндекс
        'Ленинградский проспект, 47 ст2' : 'Клёвый офис, чего уж', //Мейлру
        'Ленинградское шоссе, 39а ст3' : 'Рейтинг под угрозой. Обновите базы', //Kaspersky
        'Банковский пер, 1/24 / Банковский пер, 1/7 / Мясницкая, 24 ст1' : 'НЛО прилетело и оставило этот статус', //Тематические медиа

        'Полковая, 3 ст1' : 'Здесь ведают, что творят', //«Ведомости»
        'Профсоюзная, 78' : 'Рыбак РБК видит издалека', //РБК daily
        'Врубеля, 4' : 'Твердо!', //«Коммерсант»
        'Правды, 24' : 'Эксперт с улицы Правды врать не может', //«Эксперт»
        'Варшавское шоссе, 9 ст1' : 'Склад ленты. Не клейкой.', //Lenta.Ru
        'Хуторская 2-я, 38а ст23' : 'Тут печатают радио', //BFM
        'Берсеневский пер, 2 ст1' : 'Не посудная лавка', //Slon.ru
        'Ленинградское шоссе, 5а' : 'Моя фамилия — Итого', //Журнал Итоги (рубрика Hi-Tech)
        'Электрозаводская, 27 ст4' : 'Рейтинг этого дома — факт, а что вокруг — аргумент', //«Аргументы и факты»
        'Кривоколенный пер, 12 / Кривоколенный пер, 12 к1 / Кривоколенный пер, 12 ст1' : 'Оставь надежду всяк сюда входящий', //Hopes and fears
        'Малая Дмитровка, 20' : 'Все стены обклеены', //Газета.ru
        'Тверская-Ямская 1-я, 2' : 'Здесь все еще используют факс', //Интерфакс
        'Правды, 24' : 'Какая страна, такая и газета', //Российская Бизнес газета
        '1905 года, 7 к1 / Звенигородское шоссе, 1' : 'Комсомол умер, но кое-что осталось', //«Московский комсомолец»
        'Петровско-Разумовский Старый проезд, 1/23' : 'Цитадель правды', //«Комсомольская правда»
        'Докукина, 16 ст1' : 'У нас здесь свой рейтинг', //Forbes
        'Ямского Поля 5-я, 5 ст1' : 'Известь и я. И одно издание.', //«Известия»
        'Новоостаповская, 5 ст14' : 'Известия уже не те', //Новые известия
        'Ямского Поля 5-я, 19/21 ст1' : 'Почти вся Россия тут', //Вести.ру
        'Новодмитровская, 5а ст8' : 'Здесь директорское кресло. И не одно.', //Генеральный директор
        'Большая Андроньевская, 17' : 'Есть, с кем посидеть', //Компания
        'Варшавское шоссе, 9 ст1' : 'Вотчина хипстеров', //Афиша Воздух
        'Бумажный проезд, 14 ст2' : 'Дом заходящего солнца', //«Вечерняя Москва»
        'Тверской бульвар, 14 ст1' : 'The times they are a-changing', //The New Times
        'Скаковая, 36' : 'Это метро никуда не едет', //Metro
        'Бумажный проезд, 14 ст1' : 'В огне не горит', //Русский Репортер
        'Трубная, 25 ст3' : 'Тут всегда готовы', //Русский пионер
        'Зубовский бульвар, 4' : '11001101', //Digit.ru
        'Руставели, 12а ст2' : 'Тут живут компьютеры', //ДИС (Директор Информационной Службы)
        'Марксистская, 34 к10 / Воронцовская, 41' : '10 терабайт IT-СМИ', //CNews.ru
        'Огородный проезд, 5' : 'We speak english here', //Intelligent Enterprise
        'Верхняя Красносельская, 2/1 ст1' : 'Медиа на букву Х', //ИКС Медиа
        'Мытищинская 3-я, 3 к2 ст1' : 'Ком новостей', //Comnews.ru
        'Нижняя Сыромятническая, 10 ст4' : 'Неделя с железным другом', //PC Week
        'Руставели, 12а ст2' : 'Не Windows и не Mac OS', //Открытые Системы
        'Гамсоновский пер, 2 ст2' : 'Железный дом', //Ferra.ru
        'Каширское шоссе, 22 к3' : 'Хобот. Без слона.', //IXBT.ru
        'Промышленная, 11а ст6' : 'Дом с тремя буквами', //THG
        'Менжинского, 25' : 'Памятник Джобсу сюда заносить?', //Appleinsider
        'Кривоколенный пер, 14' : 'Дом московского айтишника', //MskIt
        'Тверской бульвар, 10' : 'Уполномочен заявить', //Tasstelecomm
        //'' : '', //Roem.ru
        'Свободы, 50' : 'Пульт, ДУ, включать, искать, где', //SeoPult.tv
        'Зубовский бульвар, 31' : 'Я, Гид', //iGuides.ru
        'Рощинский 2-й проезд, 8' : 'Стоит на компьютерной земле', //Computerra.ru
        'Ленинградский проспект, 39' : 'Мыльная опера "Высокие технологии"', //Hi-Tech.mail.ru
        'Профсоюзная, 3' : 'Лучше не заходите сюда с Нокией', //Mobile-review.com
        'Ольховская, 16 ст6' : 'На земле жестко, зайдите внутрь', //TeraFirrma
        'Малая Почтовая, 12' : 'Без Мити Фомина', //Hi-Fi.ru 
        'Горбунова, 2 ст3' : 'Всем приложения, посоны!', //apps4all.ru
        'Пестовский пер, 16 к2' : 'Наш паровоз вперед летит', //Sostav.ru
        'Краснопролетарская, 16' : 'Чтиво для перемены', //Cossa.ru
        'Нижний Кисловский пер, 3' : 'Отвёрто... адвертология', //Advertology.ru
        'Большая Новодмитровская, 14' : 'Наш индекс не менее адский', //Adindex.ru
        'Ямского Поля 3-я, 18' : 'Иллюстрированный атлас медиа', //Media-atlas.ru
        'Щипковский 1-й пер, 18' : 'Много иностранных умных слов', //Маркетинг Менеджмент - Marketing-magazine.ru
        'Полковая, 3 ст6' : 'Деньги за воздух', //Новости маркетинга Marketingnews.ru
        'Братеевская, 27 к1' : 'Тут расскажут, как брать паузу', //Новости рекламы
        'Потаповский пер, 12' : 'Сайт о 4-х буквах ищите тут', //Adme
        'Нижняя Масловка, 9' : 'Дом на колесах', //Авторадио
        'Хорошёвская 3-я, 12' : 'Хорошие Н о Р от С', //РСН (Русская служба новостей)
        'Стремянный пер, 25 / Большой Строченовский пер, 22' : 'Маффин. Или Финам?', //Финам ФМ
        'Хуторская 2-я, 38а ст23' : 'ФМ, но не Достоевский', //Бизнес ФМ
        'Токмаков пер, 21 / Денисовский пер, 2а' : 'Здесь могут произнести Ъ по радио', //Коммерсант ФМ
        'Правды, 24 ст2' : 'Говорит и показывает Москва', //Москва 24
        'Профсоюзная, 78' : 'Рыбак РБК видит издалека', //РБК ТВ
        'Новый Арбат, 11 ст1' : 'Москвы! Сквы! Квы! Вы! Ы!', //Эхо Москвы
        'Покровка, 47/24' : 'Не за, а про', //ПРО Бизнес ТВ
        'Петровско-Разумовская аллея, 12а' : 'Серебро дороже золота', //Серебряный дождь
        'Берсеневская Набережная, 8 ст1 / Берсеневский пер, 2/1' : 'Смотрим воду', //Телеканал «Дождь»
        //'' : 'Прислушайтесь к городу', //City FM
        'Малая Дмитровка, 20' : 'Словно птица в небесах', //Радио Свобода
        'Большой Каретный пер, 22 ст2 / Большой Каретный пер, 22 ст4' : 'Где мои Техно 24? На Большом Каретном', //Techno 24 TV Channel
        
        'Красная площадь, МАВЗОЛЕЙ' : 'Получше, чем в шалаше',
        'Академика Королёва, 15' : 'Отсюда и ваш дом видно', //Останкинская башня
        'Новослободская, 45' : 'А тут не так уж и плохо!', //Бутырка (СИЗО-2)
        'Волхонка, 15' : 'Странный тут бассейн!', //ХХС
        'Сыромятнический 4-й пер, 1 ст6' : 'А где вино-то?',//Винзавод
        'Краснопресненская Набережная, 2' : 'Ищете овальный кабинет?',//Дом Правительства Российской Федерации
        'Петровка, 38' : 'Шампанского?',//ГУ МВД России
        'Шереметьево аэропорт, терминал A' : 'На месте Сноудена я бы поискал вариант получше',//Шереметьево 
        'Дворцовая, 1х' : 'С нами Алла, с нами Филипп',//Кремлевский дворец
        'Земляной Вал, 76 / Верхняя Радищевская, 21' : 'Пааааррррвали рейтинг',//Театр на Таганке
        'Лаврушинский пер, 10 / Малый Толмачёвский пер, 9/8 ст1' : 'Да тут есть на что посмотреть!',//Третьяковка
        'Ленинские Горы, 1' : 'Чем выше горы, тем ниже Приоры',//МГУ
        'Красная площадь, 2' : 'Отличное место для лезгинки'//Собор Василия Блаженного
    },
    // Тольятти
    '22': {
        'Приморский бульвар, 42': 'Анатолий Кукаев'
    },
    // Красноярск
    '7': {
        'Водопьянова, 15': "Mamenko's bar"
    }
};
var metro_projects = [32,38,19,1,9,18,21];
var cityCenterData = {
	'moskva': {
		lon: 	37.620375,
		lat: 	55.754977,
		zoom: 	11,
        name:   'Москва',
        id:     32  
	},
	'sankt-peterburg': {
		lon: 	30.311106,
		lat: 	59.933976,
		zoom: 	13,
        name:   'Санкт-Петербург',
        id:     38
	},
	'novosibirsk': {
		lon: 	82.929874,
		lat: 	55.029291,
		zoom: 	13,
        name:   'Новосибирск',
        id:     1
	},
	'ekaterinburg': {
		lon: 	60.622362,
		lat: 	56.839037,
		zoom: 	13,
        name:   'Екатеринбург',
        id:     9
	},
	'nnovgorod': {
		lon: 	44.010896,
		lat: 	56.325762,
		zoom: 	13,
        name:   'Нижний Новгород',
        id:     19
	},
	'samara': {
		lon: 	50.135427,
		lat: 	53.206593,
		zoom: 	13,
        name:   'Самара',
        id:     18
	},
	'kazan': {
		lon: 	49.110685,
		lat: 	55.799438,
		zoom: 	13,
        name:   'Казань',
        id:     21
	},
	'omsk': {
		lon: 	73.417934,
		lat: 	54.973073,
		zoom: 	13,
        name:   'Омск',
        id:     2
	},
	'chelyabinsk': {
		lon: 	61.396944,
		lat: 	55.171472,
		zoom: 	13,
        name:   'Челябинск',
        id:     15
	},
	'rostov': {
		lon: 	39.774616,
		lat: 	47.248286,
		zoom: 	13,
        name:   'Ростов-на-Дону',
        id:     24
	},
	'ufa': {
		lon: 	55.962389,
		lat: 	54.739789,
		zoom: 	13,
        name:   'Уфа',
        id:     17
	},
	'volgograd': {
		lon: 	44.522698,
		lat: 	48.707928,
		zoom: 	13,
        name:   'Волгоград',
        id:     33
	},
	'permy': {
		lon: 	56.251051,
		lat: 	58.014455,
		zoom: 	13,
        name:   'Пермь',
        id:     16
	},
	'krasnoyarsk': {
		lon: 	92.913115,
		lat: 	56.04226,
		zoom: 	13,
        name:   'Красноярск',
        id:     7
	},
	'almaty': {
		lon: 	76.928224,
		lat: 	43.237414,
		zoom: 	13,
        name:   'Алматы',
        id:     67
	},
	'odessa': {
		lon: 	30.7451,
		lat: 	46.466709,
		zoom: 	13,
        name:   'Одесса',
        id:     14
	},
	'vladivostok': {
		lon: 	131.887618,
		lat: 	43.115366,
		zoom: 	13,
        name:   'Владивосток',
        id:     25
	}
};