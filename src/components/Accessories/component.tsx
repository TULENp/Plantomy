import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard_mini from '../ProductCard_mini'
import "./style.css"

export default function Header(): JSX.Element {
    return (
        <aside className='accessories'>
            <ProductCard_mini />
            <ProductCard_mini />
            <ProductCard_mini />
            <ProductCard_mini />
        </aside>
    )
}
