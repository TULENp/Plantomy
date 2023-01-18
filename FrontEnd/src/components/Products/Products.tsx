
import { TProduct } from '../../types';
import { ProductCard } from '../../components/ProductCard';
import "./Products.scss";
import { useAppSelector } from '../../hooks/redux';

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products(): JSX.Element {

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    
    const cardsList: JSX.Element[] = products.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <aside className='cards'>
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
                            {products.length === 0
                                ?
                                <>
                                <div className='not_found_product_filter'>
                                    <div className='wrapper_not_found_product'>
                                        <h1>Нет подходящих товаров.</h1>
                                        <h3>Попробуйте сбросить фильтры.</h3>
                                        <img className='sad_icon' width={60} src='/icon_filter.png' alt='sad.png' />
                                    </div>
                                </div>
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
        </aside>
    )
}
