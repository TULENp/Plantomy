import React from 'react'
import { TCard } from '../../types'
// import './style.css'

//* Function of this component:
//*
//* Display product info. Page version
//*
export function ProductCard({ image, title, price, description }: TCard): JSX.Element {
    return (
        <section className='productCard'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div>
                <h3>{price} р</h3>
                <div>
                    <img src="Pot.svg" alt="potImg" />
                    <h4>В стоимость входит горшок</h4>
                </div>
            </div>
            <div>
                <button>В корзину</button>
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </section>
    )
}
