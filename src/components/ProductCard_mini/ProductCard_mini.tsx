import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

//todo add normal classNames or ids
export function ProductCard_mini(): JSX.Element {
    return (
        <div className='ProductCard_mini'>
            <Link to={"/product"}>
                <section className='info'>
                    <img src="" alt="Img" />
                    <h3>Название товара</h3>
                    <h3>990 р</h3>
                </section>
            </Link>
            <div className='action'>
                <button>В корзину</button>
                <div className="addToFavorites">сердечко</div>
            </div>
        </div>
    )
}
