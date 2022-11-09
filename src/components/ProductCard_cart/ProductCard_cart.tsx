import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

//todo add normal classNames or ids
export function ProductCard_cart(): JSX.Element {
    return (
        <>
            <Link to={"/product"}>
                <section className='ProductCard_cart'>
                    <img src="" alt="Img" />
                    <div className="info">
                        <h2>Бегония ампельная</h2>
                        <div className="action">
                            <h3>979р</h3>
                            <h3>- 1 +</h3>
                            <img src="" alt="trashCan" />
                        </div>
                    </div>
                </section>
            </Link>
            <button>+ Добавить кашпо</button>
        </>
    )
}
