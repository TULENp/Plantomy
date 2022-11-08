import React from 'react'
import { Link } from 'react-router-dom'

//todo add normal classNames or ids
export default function PlantCard_mini(): JSX.Element {
    return (
        <>
            <Link to={"/plant"}>
                <section className='plantCard_mini'>
                    <img src="" alt="plantImg" />
                    <h3>Название растения</h3>
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
