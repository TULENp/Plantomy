
export type TCard = {
    id: number,
    type:string,
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
    number:number,
    status:string,
    sum:number,
    date:string
}
