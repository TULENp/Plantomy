import React from 'react'
import { Link } from 'react-router-dom'
import { Products_cart } from '../../components/Products_cart'
import './style.css'

export function CartPage(): JSX.Element {
    return (
        <main >
            <h2>Корзина</h2>
            <div className='cartPage'>
                <section className='products'>
                    <Products_cart />
                </section>
                <section className='toOrder'>
                    <h2>Общая стоимость</h2>
                    <div>
                        <h3>4 товара</h3>
                        <h2><b>3158 р</b></h2>
                    </div>
                    <Link to={"/order"}>
                    <button>Приобрести</button>
                    </Link>
                </section>
            </div>
        </main >
    )
}
