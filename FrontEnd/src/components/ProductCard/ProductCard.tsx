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
    const [quantityActive, setQuantityActive] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [quantityNum, setQuantityNum] = useState(1);



    useEffect(() => {
        //checking if the item is in the favorites
        const favRaw = localStorage.getItem('favorites');
        let favItems: TProduct[] = favRaw ? JSON.parse(favRaw) : [];

        if (favItems.some(prod => prod.id === product.id)) {
            setIsFav(true);
        }
        //checking if the item is in the cart
        const cartRaw = localStorage.getItem('cart');
        let cartItems: TProduct[] = cartRaw ? JSON.parse(cartRaw) : [];
        
        if (cartItems.some(prod => prod.id === product.id)) {
            setQuantityActive(true);
        }
    }, [])



    function Increment() {
        if (quantityNum < 99) {
            setQuantityNum(quantityNum + 1);
        }
    }

    function Decrement() {
        if (quantityNum > 1) {
            setQuantityNum(quantityNum - 1);
        }
        else if (cardType !== 'cart') {
            setQuantityActive(false);
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
        setQuantityActive(true);
    }

    function ChangeFavorites() {
        const raw = localStorage.getItem('favorites');
        let cartItems: TProduct[] = raw ? JSON.parse(raw) : [];
        if (isFav) {
            cartItems = cartItems.filter(prod => prod.id != product.id);
        }
        else {
            cartItems.unshift(product);
        }
        localStorage.setItem('favorites', JSON.stringify(cartItems));
        setIsFav(prev => !prev);
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
            <span className='minus' onClick={Decrement} >-</span>
            <span className='num'>{quantityNum}</span>
            <span className='plus' onClick={Increment}>+</span>
        </div>

    const FavIcon =
        <img className='btn_heart' onClick={ChangeFavorites} src={isFav ? "FullHeart.svg" : "EmptyHeart.svg"} alt="favorite" />

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
                                {quantityActive
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
                    <hr className='line1'></hr>
                    <div className='radio_info_product'>
                        <input className='radio__input_product' type='radio' value="cachepot" name='myInfoProduct' id='Anchor1' />
                        <label className='radio__label_product' htmlFor='Anchor1'>
                            <div className='img_pot_test' />Кашпо</label>
                        <input className='radio__input_product' type='radio' value="info" name='myInfoProduct' id='Anchor2' />
                        <label className='radio__label_product' htmlFor='Anchor2'>
                            <div className='img_info_test' />Информация</label>
                        <input className='radio__input_product' type='radio' value="care" name='myInfoProduct' id='Anchor3' />
                        <label className='radio__label_product' htmlFor='Anchor3'>
                            <div className='img_care_test' />Уход</label>
                    </div>
                    {/* </div> */}
                    <hr className='line2'></hr>
                    <div className='plant_all_info'>
                        <div className='section_accessories'>
                            <div className='h_caspho'>
                                <img width='50' height='50' src='src\Assets\cachepot.svg'></img>
                                <h3>Подходящие кашпо</h3>
                            </div>
                            <div className='cont_accessories'>
                                <Accessories />
                            </div>
                        </div>
                        <div className='section_info'>
                            <div className='h_info'>
                                <img width='50' height='50' src='src\Assets\infoBrown.png'></img>
                                <h3>Информация</h3>
                            </div>
                            <div className='cont_info'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
                            </div>
                        </div>
                        <div className='section_care'>
                            <div className='h_care'>
                                <img width='50' height='50' src='src\Assets\careBlue.png'></img>
                                <h3>Уход</h3>
                            </div>
                            <div className='cont_care'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
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
                        {quantityActive
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
