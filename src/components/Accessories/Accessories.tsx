import React, { useState } from 'react'
import { data } from '../../Data';
import { ProductCard_mini } from '../ProductCard_mini'
import "./style.css"

export function Accessories(): JSX.Element {

    //todo move to it's own folder/file
    //* start
    type TCard = {
        id: number,
        image: string,
        title: string,
        price: number,
    }
    const [cards, setCards] = useState<TCard[]>(loadCards());
    // const cardsArray
    function loadCards(): TCard[] {
        //get cards data from backend 
        return data;
    }
    const cardsList: JSX.Element[] = cards.map((card: TCard) => {
        return (
            <ProductCard_mini key={card.id} id={card.id} image={card.image} title={card.title} price={card.price} />
        )
    })
    //* end

    return (
        <aside className='accessories'>
            {cardsList}
        </aside>
    )
}
