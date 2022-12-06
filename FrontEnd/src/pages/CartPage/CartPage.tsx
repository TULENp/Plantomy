import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './CartPage.scss'
import { ShoppingCart } from '../../components/ShoppingCart'
import { TProduct } from '../../types'

export function CartPage(): JSX.Element {

    //get cart data from localStorage
    const raw = localStorage.getItem('cart');
    const cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
    //calculate the total amount of products
    const cartSum = cartItems.reduce((partialSum, item) => partialSum + item.price, 0);

    //TODO add "товара","товар","товаров" check
    return (
        <main >
            <h2 className='h_cart'>Корзина</h2>
            <div className='cartPage'>
                <section className='products'>
                    <ShoppingCart products={cartItems} />
                </section>
                <section className='toOrder'>
                    <h2>Общая стоимость</h2>
                    <div className='order_info'>
                        <h3 className='product_num'>{cartItems.length} товара</h3>
                        <h3 className='product_cost'><b>{cartSum} ₽</b></h3>
                    </div>
                    <Link to={"/order"}>
                        <Button className='btn_buy'>Приобрести</Button>
                    </Link>
                </section>
            </div>
        </main >
    )
}
