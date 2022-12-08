import React from 'react'
import { ProductCard } from '../../components/ProductCard';
import { TProduct } from '../../types';
import './FavoritesPage.scss';

export function FavoritesPage(): JSX.Element {
    const raw = localStorage.getItem('favorites');
    const cartItems: TProduct[] = raw ? JSON.parse(raw) : [];

    const cardsList: JSX.Element[] = cartItems.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })
    return (
        <>
            <h1 className='h1_favorite'>Избранное</h1>
            <div className='favorites_page'>
                {cardsList}
            </div>
        </>
    )
}
