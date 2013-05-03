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
            'Срань господня!',
            'Ссань'
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
            'Жопа мира'
        ]
    },
    {
        from: 31,
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
        to: 99,
        labels: [
            'Дайте две',
            'ЗБС!',
            'Отличное местечко, поздравляем!',
            'Огонь!',
            'Хоромы',
            'Всем бы так',
            'Более лучше некуда',
            'Fuck yeah!',
            'Крутобл',
            'Во куркуль!'
        ]
    },
    {
        from: 100,
        to: 100,
        labels: [
            'Ебть, ты бг (©)'
        ]
    }
];
var special_labels = {
    'Вокзальная, 3':	'White house',
    'Переездная, 64/1':	'На 4-ку',
    'Вавилова, 3':	'Дача лучше',
    'Сухарная, 101/1':	'Своих не бросим',
    'Титова, 11/1':	'Успех!',
    'Высоцкого, 52':	'Хогошо!',
    'Герцена, 6':	'Воооот',
    'Челюскинцев, 4':	'Минчи одобряет',
    'Горский, 65 или 69':	'Гайз!',
    'Добролюбова, 132':	'fckn house',
    'Советская, 49':	'Вот это всё',
    'Крылова, 45':	'Да вы ж котятки',
    'Кирова, 27/3':	'Кудряво!',
    'Челюскинцев, 15/1':	'Фотодом',
    'Мусы Джалиля, 3/1':	'Закаты ЗБС',
    'Лаврентьева, 6/1':	'It-дом какой-то',
    'Громова, 17/2 или 17':	'Зато какой дизайн!',
    'Красный проспект, 36':	'О-ооо-ОООО-ооо!',
    'Дмитрия Шамшурнина, 43': '',
    'Обь, Аэропорт, Обь-4':	'Уже валите?',
    'Красный проспект, 34':	'Вообще-то 146%',
    'Ватутина, 107':	'Икея не вывозит',
    'Военная, 5':	'Да, можно жить',
    'Площадь Карла Маркса, 7':	'Огонь'
};