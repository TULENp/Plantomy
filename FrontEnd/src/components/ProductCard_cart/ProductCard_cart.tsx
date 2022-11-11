import React from 'react'
import { Link } from 'react-router-dom'
import { TCard } from '../../types'
import './style.css'

//TODO add normal classNames or ids
export function ProductCard_cart({id, image, title, price }:TCard): JSX.Element {
    return (
        <>
            <Link to={`/product/${id}`}>
                <section className='ProductCard_cart'>
                    <img src={image} alt={title} />
                    <div className="info">
                        <h2>{title}</h2>
                        <div className="action">
                            <h3>{price}р</h3>
                            <h3>- 1 +</h3>
                            <img src="TrashCan.svg" alt="trashCan" />
                        </div>
                    </div>
                </section>
            </Link>
            <button>+ Добавить кашпо</button>
        </>
    )
}
