
import { TProduct } from '../../types';
import { ProductCard } from '../ProductCard';
import "./ShoppingCart.scss"

//* Function of this component:
//*
//* Display list of product elements. Shopping cart version
//*
export function ShoppingCart(): JSX.Element {

    const raw = localStorage.getItem('cart');
    const cartItems: TProduct[] = raw ? JSON.parse(raw) : [];

    const cardsList: JSX.Element[] = cartItems.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'cart'} />
        )
    })

    return (
        <aside className='products_cart'>
            {cardsList}
        </aside>
    )
}
