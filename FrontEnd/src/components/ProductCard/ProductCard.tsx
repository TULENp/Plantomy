import { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { AddToCart, DecCartItem, GetCart, GetFavorites, IncCartItem, RemoveFromCart, SwitchFavorite } from '../../store/reducers/ActionCreators';
import { TProduct, TCardType } from '../../types';
import { useAppDispatch } from '../../hooks/redux';
import './ProductCard.scss';
import './ProductCard_mini.scss';
import './ProductCard_cart.scss';

//* Function of this component:
//*
//* Display product info in different versions
//* versions: mini, cart, big, poll
//*
export function ProductCard({ product, cardType }: { product: TProduct, cardType: TCardType }): JSX.Element {

    //TODO change src={'/' + image} to  src={image}
    const { id, image, title, price, description, category } = product;
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartNumber, setCartNumber] = useState(0);
    const dispatch = useAppDispatch();

    async function addToCard() {
        const result = await AddToCart(id);

        if (result === 401) {
            alert('Нужно авторизоваться');
        }
        else if (result === 400) {
            alert('Данный товар уже в корзине');
        }
        else {
            setCartNumber(1);
            dispatch(GetCart());
        }
    }

    async function removeFromCart() {
        const result = await RemoveFromCart(id);

        if (result === 401) {
            alert('Нужно авторизоваться');
        }
        else if (result === 400) {
            alert('Данный товар не найден?');
        }
        else {
            dispatch(GetCart());
        }
    }

    // Increase the number of items in the cart
    async function incCartNum() {
        if (cartNumber < 99) {
            const result = await IncCartItem(id);
            if (result === 200) {
                setCartNumber(cartNumber + 1);
            }
        }
    }

    // Decrease the number of items in the cart
    async function DecCartNum() {
        const result = await DecCartItem(id);

        if (result === 200) {
            if (cartNumber > 1) {
                setCartNumber(cartNumber - 1);
            }
            else if (cardType !== 'cart') {
                removeFromCart();
            }
        }
    }

    async function switchFavorite() {
        const result = await SwitchFavorite(id);

        if (result === 401) {
            alert('Нужно авторизоваться');
        }
        else {
            setIsFavorite(prev => !prev);
            dispatch(GetFavorites());
        }
    }

    const CartCounter =
        <div className='btn_quantity'>
            <span className='minus' onClick={DecCartNum} >-</span>
            <span className='num'>{cartNumber}</span>
            <span className='plus' onClick={incCartNum}>+</span>
        </div>

    const FavoriteIcon =
        <img className='btn_heart' onClick={switchFavorite} src={isFavorite ? "/FullHeart.svg" : "/EmptyHeart.svg"} alt="favorite" />

    const CartActions =
        <>
            {cartNumber === 0
                ?
                <>
                    <Button type='primary' className='btn_in_сart' onClick={addToCard}>
                        В корзину
                    </Button>
                </>
                :
                <>
                    {CartCounter}
                </>
            }
        </>

    return (
        <>
            {/* //* Big product card for ProductPage*/}
            {cardType === 'big' &&
                <section className='productCard'>
                    <div className='cont_main_info_plant'>
                        <div className='wrap_img_product'>
                            <img className='img_product' src={'/' + image} alt={title} />
                        </div>
                        <div className='cont_product_info'>
                            <h3 className='title'>{title}</h3>
                            <h4 className='description'>{description}</h4>
                            <div className='cont_price_pot'>
                                <h3 className='price'>{price} ₽</h3>
                                <div className='cont_pot_h4'>
                                    <img src="/Pot.svg" alt="potImg" />
                                    <h4>В стоимость входит горшок</h4>
                                </div>
                            </div>
                            <div className='cont_in_cart_heart'>
                                {CartActions}
                                {FavoriteIcon}
                            </div>
                        </div>
                    </div>
                </section>
            }

            {/* //* Mini product card for shop*/}
            {cardType === 'mini' &&
                <div className='ProductCard_mini'>
                    <section className='info'>
                        <Link to={'/product/' + id}>
                            <img className='img_productCard_mini' src={'/' + image} alt="Img" />
                            <h3 className='line-limit-length'>{title}</h3>
                            <h3 className='price'>{price} ₽</h3>
                        </Link>
                    </section>
                    <div className='action'>
                        {CartActions}
                        {FavoriteIcon}
                    </div>
                </div>
            }

            {/* //* Cart product card for CartPage*/}
            {cardType === 'cart' &&
                <section className='productCard_cart'>
                    <Link to={'/product/' + id}>
                        <img className='img_product_cart' src={'/' + image} alt={title} />
                    </Link>
                    <div className="info">
                        <h2 className='title_product'>{title}</h2>
                        <div className="action">
                            <h3 className='price_cart'>{price} ₽</h3>
                            <>
                                {CartCounter}
                            </>
                            <img className='img_trashCan' src="/TrashCan.svg" alt="trashCan" onClick={removeFromCart} />
                        </div>
                        <Button className='btn_add_caspho'><div className='img_plus' /> Добавить кашпо</Button>
                    </div>
                </section>
            }

            {/* //*Product card for PollPage */}
            {cardType === 'poll' &&
                <section className='productCard_poll'>
                    <div>
                        <h1 className='h1_best_result'>Лучший результат</h1>
                        <div className='wrapper_plant_info'>
                            <div className='cont_plant_info'>
                                <Link to={'/product/' + id}>
                                    <div className='plant_info'>
                                        <h2 className='plant_name'>{title}</h2>
                                        <h3 className='plant_category'><span>Категория:</span> {category}</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className='action'>
                                <h3 className='price_cart'>{price} ₽</h3>
                                {CartActions}
                            </div>
                        </div>
                        <div className='wrapper_same_product_img'>
                            <h1 className='h1_same_product'>Также вам подходит</h1>
                            <img className='img_arrow_poll' src='/arrow_poll.png' alt='arrow_poll.png' />
                        </div>
                    </div>
                    <div className='wrapper_plant_img'>
                        <Link to={'/product/' + id}><img src={'/' + image} className='plant_img' /></Link>
                        <img src='/background_poll.png' className='background_poll' width={567} />
                    </div>
                </section>
            }

            {/* //*Product card for CompletedOrderPage */}
            {cardType === 'order' &&
                <section className='productCard_order'>
                    <Link to={'/product/' + id}>
                        <div className='cont_main_info_plant'>
                            <img className='img_product' src={'/' + image} alt={title} />
                            <h3 className='title'>{title}</h3>
                            <h4 className='prod_quantity'>3 шт.</h4>
                        <h4 className='price'>{price} ₽</h4>
                        <h4 className='sum'>???? ₽</h4>
                    </div>
                    </Link>
                </section>
            }
        </>
    )
}
