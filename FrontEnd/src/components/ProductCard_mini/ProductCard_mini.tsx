import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '../../types'
import { Button } from 'antd'
import './ProductCard_mini.scss'

//* Function of this component:
//*
//* Display product info. List version
//*
//TODO add normal classNames or ids
export function ProductCard_mini(product: TProduct): JSX.Element {

    const { id, image, title, price } = product;

    function AddToCard() {
        const raw = localStorage.getItem('cart');
        const cartItems: TProduct[] = raw ? JSON.parse(raw) : [];

        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    return (
        <div className='ProductCard_mini'>
            <Link to={`/product:${id}`}>
                <section className='info'>
                    <img className='img_productCard_mini' src={image} alt="Img" />
                    <h3 className='line-limit-length'>{title}</h3>
                    <h3 className='price'>{price} ₽</h3>
                </section>
            </Link>
            <div className='action'>
                <Button type='primary' className='btn_in_cart' onClick={AddToCard}>В корзину</Button>
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </div>
    )
}
