import { TProduct, TProductsType, TSize } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { ProductCard } from '../ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Accessories.scss';
import { useEffect, useState } from 'react';
import { GetAccessories } from '../../store/reducers/ActionCreators';
import { LazyLoading } from '../LazyLoading';
// import "./style.css"

//* Function of this component:
//*
//* Display additional accessories in one line. 
//* Items in line can be scrolled horizontally   
//*
export function Accessories({ productId }: { productId: number }): JSX.Element {

    const [accessories, setAccessories] = useState<TProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAccessories() {
        const prods = await GetAccessories(productId);
        if (prods instanceof Array) {
            setAccessories(prods);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getAccessories();
        setIsLoading(true);
    }, [productId])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // initialSlide: -1,
        nextArrow: <img src='/right-arrow.svg' />,
        prevArrow: <img src='/left-arrow.svg' />,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    }

    const cardsList: JSX.Element[] = accessories.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <aside className='accessories'>
            {isLoading
                ?
                <LazyLoading type='spin'/>
                :
                <>
                    {accessories.length !== 0
                        ?
                        <Slider {...settings}>
                            {cardsList}
                        </Slider>
                        :
                        <h1>Нет подходящих товаров</h1>
                    }
                </>
            }
        </aside>
    )
}
