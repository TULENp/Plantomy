import React from 'react'
import { Filter } from '../../components/Filters'
import { News } from '../../components/News'
import { ProductCard_mini } from '../../components/ProductCard_mini'
import { SearchBar } from '../../components/SearchBar'
import './style.css'

export function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <div className="products">
                <Filter />
                <section className='cards'>
                    <ProductCard_mini />
                    <ProductCard_mini />
                    <ProductCard_mini />
                    <ProductCard_mini />
                </section>
            </div>
        </>
    )
}
