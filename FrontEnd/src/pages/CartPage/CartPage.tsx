
import { TProduct } from '../../types';
import './CartPage.scss';
import { useAppSelector } from '../../hooks/redux';
import { ProductCard } from '../../components/ProductCard';
import { ShoppingCart } from '../../components/ShoppingCart';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export function CartPage(): JSX.Element {

    const { cartItems, prodQuantity, totalSum, isLoading, miniLoader, error } = useAppSelector(state => state.CartReducer);

    //TODO display error message
    return (
        <main >
            <h2 className='h_cart'>Корзина</h2>
            {miniLoader && <h1>Мини загрузка</h1>}
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>Код ошибки: {error}</h1>
                        :
                        <>
                            {cartItems.length === 0
                                ?
                                <div className='not_found_productCard_cart'>
                                    <div className='wrapper_not_found_cart'>
                                        <h1>В корзине пока нет ни одного товара</h1>
                                        <img className='sad_icon' width={40} src='/sad.png' alt='sad.png' />
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
                                            <h3 className='product_num'>{prodQuantity}</h3>
                                            <h3 className='product_cost'><b>{totalSum} ₽</b></h3>
                                        </div>
                                        <Link to={"/order"} state={{
                                            data: {
                                                quantity: prodQuantity,
                                                totalAmount: totalSum
                                            }
                                        }}>
                                            <Button className='btn_buy'>Приобрести</Button>
                                        </Link>
                                    </section>
                                </div>
                            }
                        </>
                    }
                </>
            }
        </main >
    )
}