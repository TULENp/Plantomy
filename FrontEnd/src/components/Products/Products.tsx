
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

    let productData = products.filter(item => item.type === productType);

    //TODO add filter like this 
    // productData = productData.filter(item => item.price >=800 && item.price <=1500);

    //TODO mb change if else to smth better
    //* 
    switch (sortBy) {
        case 'byPopularity': //is not real byPopularity sort. Sorting by ids cause we don't take popularity into account
            productData = productData.sort((a, b) => a.id - b.id);
            break;
        case 'byNovelty':
            productData = productData.sort((a, b) => +new Date(a.date) - +new Date(b.date));
            break;
        case 'cheapFirst':
            productData = productData.sort((a, b) => a.price - b.price);
            break;
        case 'expensiveFirst':
            productData = productData.sort((a, b) => b.price - a.price);
            break;
    }
    //*

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
