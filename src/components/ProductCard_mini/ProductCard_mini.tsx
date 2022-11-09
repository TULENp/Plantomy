import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

//todo add normal classNames or ids
//todo fix ts(7031) error by adding types somewhere in MainPage.tsx 
// works with error, but works
export function ProductCard_mini({ id, image, title, price }): JSX.Element {
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
