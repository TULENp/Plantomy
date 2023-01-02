
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { ShoppingCart } from '../../components/ShoppingCart';
import { TProduct } from '../../types';
import './CartPage.scss';
import { useEffect, useState } from 'react';
import { GetCart, GetCartItems } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ProductCard } from '../../components/ProductCard';

export function CartPage(): JSX.Element {

    //TODO save and get cartItems from store
    const [_cartItems, setCartItems] = useState<TProduct[]>([]);
    const [_isLoading, setIsLoading] = useState(true);
    const dispatch = useAppDispatch();
    const { cartItems, isLoading, error } = useAppSelector(state => state.CartReducer);

    // useEffect(() => {
    //     getCartItems();
    // }, [])

    async function getCartItems() {
        const cart: TProduct[] = await GetCart();

        setCartItems(cart);
        setIsLoading(false);

        // FIXME test output of cart count
        if (_cartItems) {

            let items = '';
            for (let item of _cartItems) {
                items += item.title + " " + item.count + "\n";
            }
            console.log(items);
        }
        //
    }

    //checking the declension of the word depending on the number of products
    let prodQuantity;
    let totalSum;

    if (_cartItems) {

        let prodWord: string = "товаров";

        const lastNumber: number = _cartItems.length % 100;
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
        //

        //calculate the total amount of products
        totalSum = _cartItems.reduce((partialSum, item) => partialSum + item.price, 0);
        //concat products number and prodWord
        prodQuantity = _cartItems.length + ' ' + prodWord;
    }

    const cardsList: JSX.Element[] = cartItems.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'cart'} />
        )
    })

    return (
        <main >
            <h2 className='h_cart'>Корзина</h2>
            {isLoading
                ?
                <h1>Загрузка</h1>
                :
                <>
                    {error
                        ?
                        <h1>Ошибка загрузки: <p>{error}</p></h1>
                        :
                        <>
                            {cardsList.length === 0
                                ?
                                <>
                                    <h1>Нет товаров в корзине.</h1>
                                </>
                                :
                                <>
                                    {cardsList}
                                </>
                            }
                        </>
                    }
                </>
            }
            {/* {_isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {!_cartItems
                        ?
                        <h1>Пожалуйста, авторизуйтесь, чтобы пользоваться корзиной.</h1>
                        :
                        <>
                            {_cartItems.length === 0
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
                                        <ShoppingCart products={_cartItems} />
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
            } */}
        </main >
    )
}