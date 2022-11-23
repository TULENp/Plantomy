
import React, { useEffect, useState } from 'react'
import { TCard } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./Products.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { GetProducts } from '../../store/reducers/ActionCreators';

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products({ plants/* , data_test, sortType */ }): JSX.Element {

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    const dispatch = useAppDispatch();

    // Get products array once on page load
    useEffect(() => {
        dispatch(GetProducts())
    }, [])

    //plants is a boolean filter 
    //data_test is an array of all products

    //TODO get "data" from props
    //get cards data from backend 
    // const productData = plants ? data : data_cachepot;
    //TODO get sort type and sort like array.sort(sortType["byNovelty"])
    // const array = data_test.sort((a,b)=> a.price - b.price); 
    const productData = plants
        ? products.filter(item => item.type === "plant")
        : products.filter(item => item.type === "cachepot");

    // const [cards, setCards] = useState<TCard[]>(productData);

    const cardsList: JSX.Element[] = productData.map((card: TCard) => {
        return (
            <ProductCard_mini key={card.id} {...card} />
        )
    })

    return (
        <aside className='cards'>
            {isLoading && <h1>Загрузка</h1>}
            {error && <h1>Ошибка загрузки</h1>}
            {cardsList}
        </aside>
    )
}
