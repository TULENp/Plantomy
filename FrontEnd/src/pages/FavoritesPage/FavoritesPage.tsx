
import { useEffect } from 'react';
import { LazyLoading } from '../../components/LazyLoading';
import { ProductCard } from '../../components/ProductCard';
import { useAppSelector } from '../../hooks/redux';
import { TProduct } from '../../types';
import './FavoritesPage.scss';

export function FavoritesPage(): JSX.Element {

    const { favorites, isLoading, error } = useAppSelector(state => state.FavoritesReducer);

    const cardsList: JSX.Element[] = favorites.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    // const cards: [] = function lol() {
    //     return cards.push(2);
    // }
    // const cards: JSX.Element[];
    const cards: JSX.Element[] = favorites.map((prod: TProduct) => {
        return (
            <LazyLoading type='miniCard' />
        )
    });

    // useEffect(() => {
    //     for( let i=1; i<=10; i++ ) {
    //         cards.push(<LazyLoading key={i} type='favorites'/>);
    //         console.log(cards);
    //     }
    //   });

    return (
        <>
            <h1 className='h1_favorite'>Избранное</h1>
            <>
                {isLoading ?
                    <>
                        <LazyLoading type='spin' />
                    </>
                    :
                    <>
                        {error
                            ?
                            <div className='not_login'>
                                <div className='wrapper_not_login'>
                                    <h1>{error}</h1>
                                    <img className='icon_login' width={40} src='/icon_login.png' alt='icon_login.png' />
                                </div>
                            </div>
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
                                        {/* <LazyLoading type='favorites' arr={favorites}/> */}
                                        {/* {cards} */}
                                    </div>
                                }
                            </>
                        }
                    </>
                }

            </>
        </>
    )
}


