import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '../../types'
import { Button } from 'antd'
import './ProductCard_cart.scss'
import { CartProductCounter } from '../CartProductCounter'

//* Function of this component:
//*
//* Display product info. Shopping cart version
//*
//TODO add normal classNames or ids
export function ProductCard_cart({ id, image, title, price }: TProduct): JSX.Element {
    return (
        <>
            <section className='productCard_cart'>
                <Link to={`/product:${id}`}>
                    <img className='img_product_cart' src={image} alt={title} />
                </Link>
                <div className="info">
                    <h2 className='title_product'>{title}</h2>
                    <div className="action">
                        <h3 className='price_cart'>{price} ₽</h3>
                        <CartProductCounter />
                        <img className='img_trashCan' src="TrashCan.svg" alt="trashCan" />
                    </div>
                    <Button className='btn_add_caspho'><div className='img_plus' /> Добавить кашпо</Button>
                </div>
            </section>
        </>
    )
}
