
import { ProductCard } from '../../components/ProductCard';
import { useAppSelector } from '../../hooks/redux';
import { TProduct } from '../../types';
import './FavoritesPage.scss';

export function FavoritesPage(): JSX.Element {

    const { favorites, isLoading, miniLoader, error } = useAppSelector(state => state.FavoritesReducer);

    const cardsList: JSX.Element[] = favorites.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })
    
    return (
        <>
            <h1 className='h1_favorite'>Избранное</h1>
            {miniLoader && <h1>Мини загрузка</h1>}
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {favorites.length === 0
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
                    }
                </>
            }
        </>
    )
}
