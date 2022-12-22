
import { TProduct } from '../../types';
import { ProductCard } from '../ProductCard';
import "./ShoppingCart.scss"

//* Function of this component:
//*
//* Display list of product elements. Shopping cart version
//*
export function ShoppingCart({ products }: { products: TProduct[] }): JSX.Element {

    const cardsList: JSX.Element[] = products.map((prod: TProduct) => {
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