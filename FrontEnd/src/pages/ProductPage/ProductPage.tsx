import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../zDataExamples/Data'
import { TProduct } from '../../types'

export function ProductPage(): JSX.Element {

    //TODO get selected product (card) from db

    const { id } = useParams();
    const productID: number = id ? (+id.split(":")[1]) : 0; 
    const product: TProduct = data.find(item => item.id === productID) || data[0];

    return (
        <article>
            <ProductCard key={product.id} {...product} />
            <Accessories />
        </article>
    )
}
