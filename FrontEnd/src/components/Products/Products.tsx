
import React, { useState } from 'react'
import { data } from '../../zDataExamples/Data';
import { data_cachepot } from '../../zDataExamples/Data_cachepot'
import { TCard } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./Products.scss"

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products({ plants, data_test/* , sortType */ }): JSX.Element {

    //plants is a boolean filter 
    //data_test is an array of all products

    //TODO get "data" from props
    //get cards data from backend 
    // const productData = plants ? data : data_cachepot;
    //TODO get sort type and sort like array.sort(sortType["byNovelty"])
    // const array = data_test.sort((a,b)=> a.price - b.price); 
    const productData = plants
        ? data_test.filter(item => item.type === "plant")
        : data_test.filter(item => item.type === "cachepot");

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
