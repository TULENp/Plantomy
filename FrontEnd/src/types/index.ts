
export type TProduct = {
    id: number,
    type: string,
    image: string,
    title: string,
    price: number,
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

export type TPollQuestion = {
    title: string,
    value: string,
    options: TPollOption[]
}
export type TPollOption = {
    title: string,
    description: string,
    value: number
}
