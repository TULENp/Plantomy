import React, { useState } from 'react'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../Data'
import { TCard } from '../../types'
import './style.css'

export function PlantPage(): JSX.Element {
    //TODO get selected product
    
    //FIXME 
    //* start
    // getting product id from window url
    let windowID: string = window.location.pathname.replace("/product:", "");
    // set this id to card state
    const [cards, setCards] = useState<TCard[]>(data);
    const card = cards[+windowID - 1];
    //* end
    
    return (
        <article>
            <ProductCard key={card.id} {...card} />
            <Accessories />
        </article>

    )
}
