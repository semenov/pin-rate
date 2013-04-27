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
        idetify: '.icon.icon_housing-department ~ span span'
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
        idetify: '.icon.icon_housing-department ~ span span'
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
        idetify: '.icon.icon_post-office ~ span span'
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
        idetify: '.icon.icon_ATM ~ span span'
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
        idetify: '.icon.icon_barber ~ span span'
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
        idetify: '.icon.icon_parking ~ span span'
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
        idetify: '.icon.icon_pharmacy ~ span span'
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
        idetify: '.icon.icon_health ~ span span'
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
        idetify: '.icon.icon_taproom ~ span span'
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
        idetify: '.icon.icon_diningroom ~ span span'
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
        idetify: '.icon.icon_confectionery ~ span span'
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
        idetify: '.icon.icon_coffeehouse ~ span span'
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
        idetify: '.icon.icon_swimming-pool ~ span span'
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
        idetify: '.icon.icon_sports-school ~ span span'
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
        idetify: '.icon.icon_fitness-center ~ span span'
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
        idetify: '.icon.icon_stadium ~ span span'
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
        idetify: '.icon.icon_education ~ span span'
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
        idetify: '.icon.icon_kindergarten ~ span span'
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
        idetify: '.icon.icon_bowling ~ span span'
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
        idetify: '.icon.icon_cinema ~ span span'
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
        idetify: '.icon.icon_park ~ span span'
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
        idetify: '.icon.icon_theater ~ span span'
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
        idetify: '.icon.icon_hypermarket ~ span span'
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
        idetify: '.icon.icon_grocery ~ span span'
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
        idetify: '.icon.icon_supermarket ~ span span'
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
        idetify: '.icon.icon_shopping-center ~ span span'
    }

];
var api_key = 'rudvjt8277';