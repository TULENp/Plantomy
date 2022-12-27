
import { TProduct } from '../../types';
import { ProductCard } from '../../components/ProductCard';
import "./Products.scss";
import { useAppSelector } from '../../hooks/redux';

//* Function of this component:
//*
//* Display list of product elements
//*
export function Products(): JSX.Element {

    const { filter } = useAppSelector(state => state.FilterReducer);
    const { productType, sortBy, careComplexity, productSize, minPrice, maxPrice, productTitle } = filter;

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);

    // product type filter
    let productData = products.filter(item => item.type === productType);

    //search
    if (productTitle) {
        const regExp = new RegExp(productTitle, "gi");
        productData = productData.filter(item => item.title.match(regExp));
    }

    //price filter 
    productData = productData.filter(item => item.price >= minPrice && item.price <= maxPrice);

    //TODO mb change switch to smth better
    //* 
    switch (sortBy) {
        case 'byPopularity': //is not real byPopularity sort. Sorting by ids cause we don't take popularity into account
            productData = productData.sort((a, b) => a.id - b.id);
            break;
        case 'byNovelty':
            productData = productData.sort((a, b) => +new Date(a.date) - +new Date(b.date));
            break;
        case 'cheapFirst':
            productData = productData.sort((a, b) => a.price - b.price);
            break;
        case 'expensiveFirst':
            productData = productData.sort((a, b) => b.price - a.price);
            break;
    }
    //*

    const cardsList: JSX.Element[] = productData.map((prod: TProduct) => {
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
                        <h1>Ошибка загрузки</h1>
                        :
                        <>
                            {productData.length === 0
                                ?
                                <>
                                    <h1>Нет подходящих товаров.</h1>
                                    <h3>Попробуйте сбросить фильтры.</h3>
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
