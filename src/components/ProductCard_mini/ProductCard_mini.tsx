import React from 'react'
import { Link } from 'react-router-dom'
import { TCard } from '../../types'
import './style.css'

//* Function of this component:
//*
//* Display product info. List version
//*
//TODO add normal classNames or ids
export function ProductCard_mini({ id, image, title, price }:TCard): JSX.Element {
    return (
        <div className='ProductCard_mini'>
            <Link to={`/product:${id}`}>
                <section className='info'>
                    <img src={image} alt="Img" />
                    <h3>{title}</h3>
                    <h3>{price} р</h3>
                </section>
            </Link>
            <div className='action'>
                <button>В корзину</button>
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </div>
    )
}
