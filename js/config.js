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
    'Академика Лаврентьева проспект, 6/1':	'It-дом какой-то',
    'Громова, 17/2':	'Зато какой дизайн!',
    'Громова, 17':	'Зато какой дизайн!',
    'Красный проспект, 36':	'О-ооо-ОООО-ооо!',
    'Дмитрия Шамшурина, 43': '',
    'Красный проспект, 34 / Щетинкина, 41':	'Вообще-то 146%',
    'Ватутина, 107':	'Икея не вывозит',
    'Военная, 5':	'Да, можно жить',
    'Карла Маркса площадь, 7':	'Огонь!'
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