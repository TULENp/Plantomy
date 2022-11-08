import React from 'react'
import { Link } from 'react-router-dom'

//todo add normal classNames or ids
export default function ProductCard_mini(): JSX.Element {
    return (
        <>
            <Link to={"/product"}>
                <section className='ProductCard_mini'>
                    <img src="" alt="Img" />
                    <h3>Название товара</h3>
                    <h3>990 р</h3>
                    <div>
                        <button>В корзину</button>
                        <div className="addToFavorites">сердечко</div>
                    </div>
                </section>
            </Link>
        </>
    )
}
