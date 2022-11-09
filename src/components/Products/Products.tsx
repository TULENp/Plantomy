import React, { useState } from 'react'
import { data } from '../../Data';
import { TCard } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./style.css"

export function Products(): JSX.Element {

    const [cards, setCards] = useState<TCard[]>(loadCards());
    //todo get data from props
    //get cards data from backend 
    function loadCards(): TCard[] {
        return data;
    }

    const cardsList: JSX.Element[] = cards.map((card: TCard) => {
        return (
            <ProductCard_mini key={card.id} id={card.id} image={card.image} title={card.title} price={card.price} />
        )
    })

    return (
        <aside className='cards'>
            {cardsList}
        </aside>
    )
}
