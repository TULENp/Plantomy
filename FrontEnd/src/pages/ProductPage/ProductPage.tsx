import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../zDataExamples/Data'
import { TProduct } from '../../types'

export function ProductPage(): JSX.Element {

    window.scrollTo(0, 0);

    //TODO get selected product (card) from db

    const { id } = useParams();
    const productID: number = id ? (+id.split(":")[1]) : -1; //FIXME
    const prod = data.find(item => item.id === productID);

    return (
        <article>
            {prod
                ? <ProductCard product={prod} cardType={'big'} />
                : <h1>Данный товар не найден</h1>
            }
            {/* <Accessories /> */}
        </article>
    )
}
