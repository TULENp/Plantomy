import React, { useState } from 'react'
import { data } from '../../Data';
import { TCard } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./style.css"

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products(): JSX.Element {

    //TODO get "data" from props
    //get cards data from backend 
    const [cards, setCards] = useState<TCard[]>(data);

    const cardsList: JSX.Element[] = cards.map((card: TCard) => {
        return (
            <ProductCard_mini key={card.id} {...card} />
        )
    })

    return (
        <aside className='cards'>
            {cardsList}
        </aside>
    )
}
