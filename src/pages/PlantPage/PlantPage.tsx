import React from 'react'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import './style.css'

export function PlantPage(): JSX.Element {
    return (
        <article>
            <ProductCard />
            <Accessories />
        </article>
        
    )
}
