import React, { useState } from 'react'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../Data'
import './style.css'

export function PlantPage(): JSX.Element {
    //todo get product id 
    return (
        <article>
            <ProductCard />
            <Accessories />
        </article>

    )
}
