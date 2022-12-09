
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
                <h1>В избранном пока нет ни одного товара</h1>
                :
                <div className='favorites_page'>
                    {cardsList}
                </div>
            }
        </>
    )
}
