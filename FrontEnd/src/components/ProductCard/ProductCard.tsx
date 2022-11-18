import React from 'react'
import { TCard } from '../../types'
import './ProductCard.scss'

//* Function of this component:
//*
//* Display product info. Page version
//*
export function ProductCard({ image, title, price, description }: TCard): JSX.Element {
    return (
        <section className='productCard'>
            <div className='wrap_img_product'>
                <img className='img_product' src={image} alt={title} />
            </div>
            <div className='cont_product_info'>
                <h3 className='title'>{title}</h3>
                <h4 className='description'>{description}</h4>
                <div className='cont_price_pot'>
                    <h3 className='price'>{price} ₽</h3>
                    <div className='cont_pot_h4'>
                        <img src="Pot.svg" alt="potImg" />
                        <h4>В стоимость входит горшок</h4>
                    </div>
                </div>
                <div>
                    <button>В корзину</button>
                    <img src="EmptyHeart.svg" alt="favorite" />
                </div>
            </div>    
        </section>
    )
}
