import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './CartPage.scss'
import { ShoppingCart } from '../../components/ShoppingCart'

export function CartPage(): JSX.Element {
    return (
        <main >
            <h2 className='h_cart'>Корзина</h2>
            <div className='cartPage'>
                <section className='products'>
                    <ShoppingCart />
                </section>
                <section className='toOrder'>
                    <h2>Общая стоимость</h2>
                    <div className='order_info'>
                        <h3 className='product_num'>4 товара</h3>
                        <h3 className='product_cost'><b>3158 ₽</b></h3>
                    </div>
                    <Link to={"/order"}>
                        <Button className='btn_buy'>Приобрести</Button>
                    </Link>
                </section>
            </div>
        </main >
    )
}
