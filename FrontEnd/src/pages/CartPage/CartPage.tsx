
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ShoppingCart } from '../../components/ShoppingCart'
import { TProduct } from '../../types'
import './CartPage.scss'

export function CartPage(): JSX.Element {

    //get cart data from localStorage
    const raw = localStorage.getItem('cart');
    const cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
    //calculate the total amount of products
    const cartSum = cartItems.reduce((partialSum, item) => partialSum + item.price, 0);

    let prodWord: string = "товаров";

    const lastNumber: number = cartItems.length % 100;
    const lastDigit: number = lastNumber % 10;
    if (lastNumber > 10 && lastNumber < 20) {
        prodWord = "товаров"
    }
    else if (lastDigit === 1) {
        prodWord = "товар"
    }
    else if (lastDigit > 1 && lastDigit < 5) {
        prodWord = "товара"
    }
    else {
        prodWord = "товаров"
    }

    const prodNumber = cartItems.length + " " + prodWord;

    return (
        <main >
            <h2 className='h_cart'>Корзина</h2>
            {cartItems.length === 0
                ?
                <div className='not_found_productCard_cart'>
                    <div className='wrapper_not_found_cart'>
                        <h1>В корзине пока нет ни одного товара</h1>
                        <img className='sad_icon' width={40} src='/sad.png' alt='sad.png'/>
                    </div>
                </div>
                :
                <div className='cartPage'>
                    <section className='products'>
                        <ShoppingCart products={cartItems} />
                    </section>
                    <section className='toOrder'>
                        <h2>Общая стоимость</h2>
                        <div className='order_info'>
                            <h3 className='product_num'>{prodNumber}</h3>
                            <h3 className='product_cost'><b>{cartSum} ₽</b></h3>
                        </div>
                        <Link to={"/order"}>
                            <Button className='btn_buy'>Приобрести</Button>
                        </Link>
                    </section>
                </div>
            }
        </main >
    )
}