import React from 'react'
import News from '../../components/News/component'
import ProductCard_mini from '../../components/ProductCard_mini/component'
import SearchBar from '../../components/SearchBar/component'

export default function MainPage(): JSX.Element {
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
