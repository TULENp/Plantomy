
import { ProductCard } from '../../components/ProductCard';
import { TProduct } from '../../types';
import './FavoritesPage.scss';

export function FavoritesPage(): JSX.Element {
    const raw = localStorage.getItem('favorites');
    const items: TProduct[] = raw ? JSON.parse(raw) : [];

    const cardsList: JSX.Element[] = items.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })
    return (
        <>
            <h1 className='h1_favorite'>Избранное</h1>
            {items.length === 0
                ?
                <div className='not_found_productCard_cart'>
                    <div className='wrapper_not_found_cart'>
                        <h1>В избранном пока нет ни одного товара</h1>
                        <img className='sad_icon' width={40} src='/sad.png' alt='sad.png' />
                    </div>
                </div>
                :
                <div className='favorites_page'>
                    {cardsList}
                </div>
            }
        </>
    )
}
