import React from 'react'
import { Link } from 'react-router-dom'

export default function PlantCard(): JSX.Element {
    return (
        <>
            <Link to={"/plant"}>
                <section className='plantCard'>
                    <img src="" alt="plantImg" />
                    <h3 className='name'>Название растения</h3>
                    <h3 className='price'>990 р</h3>
                    <div className="action">
                        <button>В корзину</button>
                        <div className="addToFavorites">сердечко</div>
                    </div>
                </section>
            </Link>
        </>
    )
}
