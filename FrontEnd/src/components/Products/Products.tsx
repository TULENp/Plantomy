
import React, { useEffect, useState } from 'react'
import { TProduct, TProductsType } from '../../types';
import { ProductCard_mini } from '../ProductCard_mini'
import "./Products.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { GetProducts } from '../../store/reducers/ActionCreators';

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products({ productType/* , data_test, sortType */ }: { productType: TProductsType }): JSX.Element {

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

    // const productData = plants
    //     ? products.filter(item => item.type === "plant")
    //     : products.filter(item => item.type === "cachepot");

    const productData = products.filter(item => item.type === productType);

    const cardsList: JSX.Element[] = productData.map((product: TProduct) => {
        return (
            <ProductCard_mini key={product.id} {...product} />
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
