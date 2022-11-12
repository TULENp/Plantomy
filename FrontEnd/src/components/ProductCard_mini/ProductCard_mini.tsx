import React from 'react'
import { Link } from 'react-router-dom'
import { TCard } from '../../types'
import { Button } from 'antd'
import './ProductCard_mini.scss'

//TODO add normal classNames or ids
export function ProductCard_mini({ id, image, title, price }:TCard): JSX.Element {
    return (
        <div className='ProductCard_mini'>
            <Link to={`/product:${id}`}>
                <section className='info'>
                    <img src={image} alt="Img" />
                    <h3 className='line-limit-length'>{title}</h3>
                    <h3 className='price'>{price} ₽</h3>
                </section>
            </Link>
            <div className='action'>
                <Button type='primary' className='btn_in_cart'>В корзину</Button>
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </div>
    )
}
