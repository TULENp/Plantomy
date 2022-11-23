import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../zDataExamples/Data'
import { TProduct } from '../../types'

export function ProductPage(): JSX.Element {

    //TODO get selected product (card) from db

    const { id } = useParams();
    const productID: number = id ? (+id.split(":")[1]) : -1; //FIXME
    const product = data.find(item => item.id === productID);

    return (
        <article>
            {product
                ? <ProductCard key={product.id} {...product} />
                : <h1>Данный товар не найден</h1>
            }
            {/* <Accessories /> */}
        </article>
    )
}
