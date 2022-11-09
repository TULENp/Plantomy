import React, { useState } from 'react'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../Data'
import { TCard } from '../../types'
import './style.css'

export function PlantPage(): JSX.Element {
    //TODO get selected product
    //* change it
    const [cards, setCards] = useState<TCard[]>(data);
    const card = cards[1];
    //*
    return (
        <article>
            <ProductCard key={card.id} {...card}/>
            <Accessories />
        </article>

    )
}
