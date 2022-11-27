
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
export function Products(): JSX.Element {

    const { productType, sortBy, careComplexity, size } = useAppSelector(state => state.FilterReducer);

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    const dispatch = useAppDispatch();

    // Get products array once on page load
    useEffect(() => {
        dispatch(GetProducts())
    }, [])

    //TODO get sort type and sort like array.sort(sortType["byNovelty"])
    // const array = data_test.sort((a,b)=> a.price - b.price); 

    let productData = products.filter(item => item.type === productType);

    if (sortBy === 'cheapFirst') {
        productData = productData.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'expensiveFirst') {
        productData = productData.sort((a, b) => b.price - a.price);
    }

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
