export type TProduct = {
    id: number,
    type: string,
    image: string,
    title: string,
    price: number,
    date: string,
    description: string
}

export type TNews = {
    link: string,
    image: string
}

export type TOrder = {
    number: number,
    status: string,
    sum: number,
    date: string
}

export type TProductsType = 'plant' | 'cachepot';

export type TSortBy = 'byPopularity' | 'byNovelty' | 'cheapFirst' | 'expensiveFirst';

export type TPollQuestion = {
    id: number,
    title: string,
    value: string,
    image:string,
    options: TPollOption[]
}

export type TPollOption = {
    title: string,
    description: string,
    value: number
}

// plant characteristics
export type TChars = {
    watering: 1 | 2 | 3,
    lighting: 1 | 2 | 3,
    temperature: 1 | 2 | 3 | 4,
    humidity: 1 | 2 | 3,
    fertilization: 1 | 2 | 3,
    size: 1 | 2 | 3,
    preferences: number,
    cost: 0 | 1 | 2 | 3
}

export type TCardType = 'big' | 'mini' | 'cart' | 'poll';
