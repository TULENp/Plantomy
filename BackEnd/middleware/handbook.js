module.exports.questions = [
    {
        id: 1,
        title: 'Как часто вы сможете поливать растение?',
        value: 'watering',
        image: 'src//Assets//1question.png',
        options: [
            {
                title: 'Редко',
                value: 1,
                description: 'Раз в месяц - раз в неделю'
            },
            {
                title: 'Периодически',
                value: 2,
                description: 'Раз в неделю - пару раз в неделю'
            },
            {
                title: 'Часто',
                value: 3,
                description: 'Несколько раз в неделю - раз в день'
            }
        ]
    },
    {
        id: 2,
        title: 'Как много света попадает в вашу квартиру?',
        value: 'lighting',
        image: '',
        options: [
            {
                title: 'Мало',
                value: 1,
                description: 'Окна выходят на север или что-то (например здание) мешает свету попадать в вашу квартиру'
            },
            {
                title: 'Умеренно',
                value: 2,
                description: 'Окна выходят на запад или восток. Весь день окна освещаются непрямыми лучами света'
            },
            {
                title: 'Много',
                value: 3,
                description: 'Окна выходят на юг. Весь день в квартиру попадают прямые лучами света'
            },
        ]
    },
    {
        id: 3,
        title: 'Насколько жарко у вас дома? (Зимой растениям нужна более низкая температура)',
        value: 'temperature',
        image: '',
        options: [
            {
                title: 'Прохладно',
                value: 1,
                description: '15-22'
            },
            {
                title: 'Тепло',
                value: 2,
                description: '18-25'
            },
            {
                title: 'Жарко',
                value: 3,
                description: '25-30'
            },
        ]
    },
    {
        id: 4,
        title: 'Какую влажность воздуха вы сможете обеспечить для растений?',
        value: 'humidity',
        image: '',
        options: [
            {
                title: 'Низкую',
                value: 1,
                description: 'Подойдет для обычных квартир. Растение может жить при низкой влажности.'
            },
            {
                title: 'Среднюю',
                value: 2,
                description: 'Растение может жить при низкой влажности, но периодически нужно использовать распылитель'
            },
            {
                title: 'Высокую',
                value: 3,
                description: 'Можно поставить в ванную. Или придется постоянно использовать распылитель.'
            },
        ]
    },
    {
        id: 5,
        title: 'Как часто вы сможете удобрять растения? (Активно удобрять нужно лишь в определенные периоды ~ несколько месяцев в году)',
        value: 'fertilization',
        image: '',
        options: [
            {
                title: 'Редко',
                value: 1,
                description: 'Раз в месяц'
            },
            {
                title: 'Периодически',
                value: 2,
                description: 'Раз в 2 недели'
            },
            {
                title: 'Часто',
                value: 3,
                description: 'Пару раз в неделю'
            }
        ]
    },
    {
        id: 6,
        title: 'Сколько места вы готовы выделить под растение?',
        value: 'size',
        image: '',
        options: [
            {
                title: 'Мало',
                value: 1,
                description: 'Поставить на полку или на небольшой подоконник'
            },
            {
                title: 'Немного',
                value: 2,
                description: 'Поставить на обычный подоконник'
            },
            {
                title: 'Много',
                value: 3,
                description: 'Поставить на пол'
            }
        ]
    },
    {
        id: 7,
        title: 'Какие у вас есть предпочтения?',
        value: 'preferences',
        image: '',
        options: [
            {
                title: 'Красивые цветки',
                value: 1,
                description: ''
            },
            {
                title: 'Свисающие стебли',
                value: 2,
                description: ''
            },
            {
                title: 'Есть плоды',
                value: 3,
                description: ''
            },
            {
                title: 'Нейтральные растения',
                value: 4,
                description: ''
            },
            {
                title: 'Красивые листья',
                value: 5,
                description: ''
            }
        ]
    },
    {
        id: 8,
        title: 'Сколько вы готовы потратить на растение?',
        value: 'cost',
        image: '',
        options: [
            {
                title: 'Немного',
                value: 1,
                description: 'от 500 до 1000'
            },
            {
                title: 'Достаточно',
                value: 2,
                description: 'от 1000 до 1500'
            },
            {
                title: 'Много',
                value: 3,
                description: 'более 1500'
            }
        ]
    }
];

// must be removed. not a handbook, just a data example
module.exports.goods = [
    {
        id: 1,
        type: 'plant',
        category: 'Ампельные',
        size: 'S',
        image: 'begonia.png',
        title: 'Бегония ампельная',
        price: 979,
        date: 'Wed, 22 May 2022',
        description: 'Группа клубневых бегоний, отличающихся длинными побегами, свисающими из горшка. Такие кустики используют в качестве комнатных растений.'
    },
    {
        id: 2,
        type: 'plant',
        category: 'Ампельные',
        size: 'S',
        image: 'ampelia.png',
        title: 'Ампельная плющелистная герань',
        price: 999,
        date: 'Wed, 20 May 2022',
        description: 'Одно из самых популярных и любимых среди цветоводов цветущих травянистых растений с продолжительным периодом цветения и яркой палитрой цветов и оттенков.'
    },
    {
        id: 3,
        type: 'plant',
        category: 'Ампельные',
        size: 'M',
        image: 'diasciya.png',
        title: 'Диасция',
        price: 1279,
        date: 'Wed, 10 May 2022',
        description: 'Необыкновенно красивое и нежное растение из семейства Норичниковые. Диасция может быть как листопадным или вечнозеленым однолетником, так и столонным многолетником.'
    },
    {
        id: 4,
        type: 'plant',
        category: 'Ампельные',
        size: 'M',
        image: 'strognilodon.png',
        title: 'Стронгилодон',
        price: 1650,
        date: 'Wed, 25 May 2022',
        description: 'Лиана из семейства Бобовых. В этот род включается порядка 14 видов. Родиной этого экзотического растения считаются Филиппины'
    },
    {
        id: 5,
        type: 'plant',
        category: 'Декоративно-лиственные',
        size: 'S',
        image: 'ochitok.png',
        title: 'Очиток Моргана',
        price: 700,
        date: 'Wed, 09 May 2022',
        description: 'Представитель рода Очиток, включающего несколько сотен разных видов. Эти растения относятся к семейству Толстянковых.'
    },
    {
        id: 6,
        type: 'plant',
        category: 'Кактусы и Суккуленты',
        size: 'S',
        image: 'ferocactus.png',
        title: 'Ферокактус',
        price: 800,
        date: 'Wed, 22 May 2022',
        description: 'Кактус из пустынных и жарких уголков Мексики. Корни у этого типа растений развиты слабо и уходят не в глубину, а вширь. Их заглублённость варьируется всего от 3 до 20 см.'
    },
    {
        id: 7,
        type: 'plant',
        category: 'Декоративно-лиственные',
        size: 'M',
        image: 'calathea.png',
        title: 'Калатея',
        price: 1280,
        date: 'Wed, 20 June 2022',
        description: 'Представитель семейства Марантовых. В состав этого рода включают более сотни различных видов. Родина калатеи — Южная Америка, а также регионы Центральной.'
    },
    {
        id: 8,
        type: 'plant',
        category: 'Кактусы и Суккуленты',
        size: 'S',
        image: 'crassula-ovata.png',
        title: 'Крассула овата',
        price: 650,
        date: 'Wed, 10 June 2022',
        description: 'Самый распространённый представитель рода Толстянок. Чаще всего именно это растение называют денежным или монетным деревом из-за формы его листочков.'
    },
    {
        id: 9,
        type: 'plant',
        category: 'Пальмы',
        size: 'L',
        image: 'areca.png',
        title: 'Арека',
        price: 4950,
        date: 'Wed, 25 June 2022',
        description: 'Представитель семейства Пальмовых Арека, которое состоит из почти 50 различных видов растений, родиной которых являются влажные тропические леса в Азии.'
    },
    {
        id: 10,
        type: 'plant',
        category: 'Луковичные',
        size: 'M',
        image: 'clivia.png',
        title: 'Кливия',
        price: 1699,
        date: 'Wed, 09 June 2022',
        description: 'Является многоцветковым и относится к семейству Амариллисовые. В дикой природе это растение получило широкое распространение в субтропической части Южной Африки.'
    },
    {
        id: 11,
        type: 'plant',
        category: 'Пальмы',
        size: 'L',
        image: 'licuala.png',
        title: 'Пальма ликуала',
        price: 3799,
        date: 'Wed, 09 June 2022',
        description: 'Такое растение, как ликуала имеет прямое отношение к редчайшим пальмам-карликам. Данный род объединяет больше 100 видов растений, которые довольно низкорослы.'
    },
    {
        id: 12,
        type: 'cachepot',
        category: 'кашпо',
        size: 'S',
        image: 'redCachepot.png',
        title: 'Красное кашпо',
        price: 1279,
        date: 'Wed, 19 May 2022',
        description: ''
    },
    {
        id: 13,
        type: 'cachepot',
        category: 'кашпо',
        size: 'M',
        image: 'geometryCachepot.png',
        title: 'Горшок "Геометрия"',
        price: 2580,
        date: 'Wed, 20 May 2022',
        description: ''
    },
    {
        id: 14,
        type: 'cachepot',
        category: 'кашпо',
        size: 'S',
        image: 'mintCubeCachepot.png',
        title: 'Кашпо "Мятый куб"',
        price: 950,
        date: 'Wed, 20 May 2022',
        description: ''
    },
    {
        id: 15,
        type: 'cachepot',
        category: 'кашпо',
        size: 'M',
        image: 'sigmaCachepot.png',
        title: 'Кашпо "СИГМА"',
        price: 1350,
        date: 'Wed, 22 May 2022',
        description: ''
    },
    {
        id: 16,
        type: 'cachepot',
        category: 'кашпо',
        size: 'L',
        image: 'whiteStoneCachepot.png',
        title: 'Кашпо "Белый камень"',
        price: 5999,
        date: 'Wed, 02 May 2022',
        description: ''
    },
    {
        id: 17,
        type: 'cachepot',
        category: 'кашпо',
        size: 'S',
        image: 'woodCachepot.png',
        title: 'Кашпо из дуба на подставке',
        price: 1899,
        date: 'Wed, 22 July 2022',
        description: ''
    },
    {
        id: 18,
        type: 'cachepot',
        category: 'кашпо',
        size: 'S',
        image: 'ovalCachepot.png',
        title: 'Кашпо "Овал"',
        price: 1150,
        date: 'Wed, 02 July 2022',
        description: ''
    },
    {
        id: 19,
        type: 'cachepot',
        category: 'кашпо',
        size: 'S',
        image: 'lineCachepot.png',
        title: 'Кашпо "LINE"',
        price: 1899,
        date: 'Wed, 22 July 2022',
        description: ''
    },
];