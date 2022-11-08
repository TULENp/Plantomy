import React from 'react'
import { News } from '../../components/News'
import { ProductCard_mini } from '../../components/ProductCard_mini'
import { SearchBar } from '../../components/SearchBar'

export function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <section className='cards'>
                <ProductCard_mini />
                <ProductCard_mini />
                <ProductCard_mini />
                <ProductCard_mini />
            </section>
        </>
    )
}
