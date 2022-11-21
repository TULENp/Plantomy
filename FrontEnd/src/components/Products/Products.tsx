
import React, {useState } from 'react'
import { data } from '../../DataExamples/Data';
import {data_cachepot} from '../../DataExamples/Data_cachepot'
import { TCard } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./Products.scss"

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products({plants}): JSX.Element {

    //TODO get "data" from props
    //get cards data from backend 
    const productData = plants ? data : data_cachepot;
    const [cards, setCards] = useState<TCard[]>(productData);

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
