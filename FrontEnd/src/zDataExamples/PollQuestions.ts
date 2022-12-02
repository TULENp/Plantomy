import { TPollQuestion } from "../types";

export const questions: TPollQuestion[] = [
    {
        id: 1,
        title: 'Как часто вы сможете поливать растение?',
        value: 'watering',
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
            {
                title: 'Не знаю',
                value: 4,
                description: 'Температура часто меняется'
            }
        ]
    },
    {
        id: 4,
        title: 'Какую влажность воздуха вы сможете обеспечить для растений?',
        value: 'humidity',
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
            {
                title: 'Не знаю',
                value: 0,
                description: ''
            }
        ]
    },
    {
        id: 5,
        title: 'Как часто вы сможете удобрять растения?',
        value: 'fertilization',
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
            },
            {
                title: 'Все нравится',
                value: 0,
                description: ''
            }
        ]
    },
    {
        id: 8,
        title: 'Сколько вы готовы потратить на растение?',
        value: 'cost',
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
            },
            {
                title: 'Цена не имеет значения',
                value: 0,
                description: ''
            }
        ]
    }
]