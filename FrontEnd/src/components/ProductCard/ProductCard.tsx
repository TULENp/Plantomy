import React, { useEffect, useState } from 'react'
import { TProduct, TCardType } from '../../types'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Accessories } from '../../components/Accessories'
import './ProductCard.scss'
import './ProductCard_mini.scss'
import './ProductCard_cart.scss'

//* Function of this component:
//*
//* Display product info. Page version
//*

export function ProductCard({ product, cardType }: { product: TProduct, cardType: TCardType }): JSX.Element {

    const { id, image, title, price, description } = product;
    const [isInCart, setIsInCart] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(1);



    useEffect(() => {
        //checking if the item is in the favorites
        const favRaw = localStorage.getItem('favorites');
        let favItems: TProduct[] = favRaw ? JSON.parse(favRaw) : [];

        if (favItems.some(prod => prod.id === product.id)) {
            setIsFavorite(true);
        }
        //checking if the item is in the cart
        const cartRaw = localStorage.getItem('cart');
        let cartItems: TProduct[] = cartRaw ? JSON.parse(cartRaw) : [];
        
        if (cartItems.some(prod => prod.id === product.id)) {
            setIsInCart(true);
        }
    }, [])

    function increment() {
        if (cartQuantity < 99) {
            setCartQuantity(cartQuantity + 1);
        }
    }

    function decrement() {
        if (cartQuantity > 1) {
            setCartQuantity(cartQuantity - 1);
        }
        else if (cardType !== 'cart') {
            setIsInCart(false);
            const raw = localStorage.getItem('cart');
            let cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
            cartItems = cartItems.filter(prod => prod.id != product.id);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }

    function AddToCard() {
        const raw = localStorage.getItem('cart');
        let cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
        cartItems.unshift(product);

        localStorage.setItem('cart', JSON.stringify(cartItems));
        setIsInCart(true);
    }

    function ChangeFavorites() {
        const raw = localStorage.getItem('favorites');
        let cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
        if (isFavorite) {
            cartItems = cartItems.filter(prod => prod.id != product.id);
        }
        else {
            cartItems.unshift(product);
        }
        localStorage.setItem('favorites', JSON.stringify(cartItems));
        setIsFavorite(prev => !prev);
    }

    function RemoveFromCart() {
        const raw = localStorage.getItem('cart');
        let cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
        cartItems = cartItems.filter(prod => prod.id != product.id);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        //FIXME need to dispatch cart changes
        window.location.reload();
    }

    const CartProdCounter =
        <div className='btn_quantity'>
            <span className='minus' onClick={decrement} >-</span>
            <span className='num'>{cartQuantity}</span>
            <span className='plus' onClick={increment}>+</span>
        </div>

    const FavIcon =
        <img className='btn_heart' onClick={ChangeFavorites} src={isFavorite ? "FullHeart.svg" : "EmptyHeart.svg"} alt="favorite" />

    return (
        <>
            {/* //* Big product card for ProductPage*/}
            {cardType === 'big' &&
                <section className='productCard'>
                    <div className='cont_main_info_plant'>
                        <div className='wrap_img_product'>
                            <img className='img_product' src={image} alt={title} />
                        </div>
                        <div className='cont_product_info'>
                            <h3 className='title'>{title}</h3>
                            <h4 className='description'>{description}</h4>
                            <div className='cont_price_pot'>
                                <h3 className='price'>{price} ₽</h3>
                                <div className='cont_pot_h4'>
                                    <img src="Pot.svg" alt="potImg" />
                                    <h4>В стоимость входит горшок</h4>
                                </div>
                            </div>
                            <div className='cont_in_cart_heart'>
                                {isInCart
                                    ?
                                    <>
                                        {CartProdCounter}
                                    </>
                                    :
                                    <Button type='primary' className='btn_in_сart' onClick={AddToCard}>
                                        В корзину
                                    </Button>
                                }
                                {FavIcon}
                            </div>
                        </div>
                    </div>
                </section>
            }

            {/* //* Mini product card for shop*/}
            {cardType === 'mini' &&
                <div className='ProductCard_mini'>
                    <Link to={`/product:${id}`}>
                        <section className='info'>
                            <img className='img_productCard_mini' src={image} alt="Img" />
                            <h3 className='line-limit-length'>{title}</h3>
                            <h3 className='price'>{price} ₽</h3>
                        </section>
                    </Link>
                    <div className='action'>
                        {isInCart
                            ?
                            <>
                                {CartProdCounter}
                            </>
                            :
                            <Button type='primary' className='btn_in_сart' onClick={AddToCard}>
                                В корзину
                            </Button>
                        }
                        {FavIcon}
                    </div>
                </div>
            }

            {/* //* Cart product card for CartPage*/}
            {cardType === 'cart' &&
                <section className='productCard_cart'>
                    <Link to={`/product:${id}`}>
                        <img className='img_product_cart' src={image} alt={title} />
                    </Link>
                    <div className="info">
                        <h2 className='title_product'>{title}</h2>
                        <div className="action">
                            <h3 className='price_cart'>{price} ₽</h3>
                            <>
                                {CartProdCounter}
                            </>
                            <img className='img_trashCan' src="TrashCan.svg" alt="trashCan" onClick={RemoveFromCart} />
                        </div>
                        <Button className='btn_add_caspho'><div className='img_plus' /> Добавить кашпо</Button>
                    </div>
                </section>
            }
        </>
    )
}
