import React from 'react'
import { ProductCard_mini } from '../ProductCard_mini'
import "./style.css"

export function Accessories(): JSX.Element {
    return (
        <aside className='accessories'>
            <ProductCard_mini />
            <ProductCard_mini />
            <ProductCard_mini />
            <ProductCard_mini />
        </aside>
    )
}
