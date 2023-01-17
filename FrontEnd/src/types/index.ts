export type TProduct = {
    id: number,
    type: TProductsType,
    category: string,
    size: TSize,
    image: string,
    title: string,
    price: number,
    date: string,
    count: number,
    sum?: number,
    cartCount?: number,
    isFav?: boolean,
    description?: string
    info?: string
}

export type TNews = {
    link: string,
    image: string
}

export type TOrder = {
    id: number,
    status: string,
    totalCost: number,
    date: string,
    //TODO must be TAddress
    address: string,
    goods: TProduct[]
}


export type TSize = 'S' | 'M' | 'L';

export type TProductsType = 'plant' | 'cachepot';

export type TSortBy = 'byPopularity' | 'byNovelty' | 'cheapFirst' | 'expensiveFirst';

export type TPollQuestion = {
    id: number,
    title: string,
    info: string,
    value: string,
    image: string,
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
    humidity: 0 | 1 | 2 | 3,
    fertilization: 1 | 2 | 3,
    size: 1 | 2 | 3,
    preferences: number,
    cost: 0 | 1 | 2 | 3
}

export type TCardType = 'big' | 'mini' | 'cart' | 'poll' | 'order';

//TODO change separate fio, use TAddress in address
export type TUser = {
    id: number,
    firstName: string
    lastName: string,
    patronymic: string,
    email: string,
    phone: string,
    address: TAddress
}

export type TAddress = {
    city: string,
    street: string,
    house: string,
    flat: string,
    index: string,
}

export type TFilter = {
    search: string,
    cost: {
        min: number,
        max: number
    },
    type: number,
    sort: number,
    category: number
}