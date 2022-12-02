
import React, { useEffect, useState } from 'react'
import { TProduct, TProductsType } from '../../types';
import { ProductCard } from '../../components/ProductCard'
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
        // fetch test
        // fetch('/api/goods/getAll')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        dispatch(GetProducts())

    }, [])

    let productData = products.filter(item => item.type === productType);

    //TODO add price filter
    // productData = productData.filter(item => item.price >= minPrice && item.price <= maxPrice);

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

    const cardsList: JSX.Element[] = productData.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
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
