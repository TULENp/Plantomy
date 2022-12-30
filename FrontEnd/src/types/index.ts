export type TProduct = {
    id: number,
    type: TProductsType,
    category: string,
    size: TSize,
    image: string,
    title: string,
    price: number,
    date: string,
    count?: number,
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
    sum: number,
    date: string,
    //TODO must be TAddress
    address: string,
    goods:TProduct[]
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

export type TCardType = 'big' | 'mini' | 'cart' | 'poll';

export type TAddress = {
    city: string,
    street: string,
    house: number,
    apartment: number,
    postIndex: string,
}

export type TUser = {
    id: number,
    fio: string,
    address: TAddress,
    email: string,
    phone: string
}