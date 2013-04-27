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