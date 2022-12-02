import React from 'react'
import { ProductCard } from '../../components/ProductCard';
import { TProduct } from '../../types';

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
            <h1>Избранное</h1>
            {cardsList}
        </>
    )
}
