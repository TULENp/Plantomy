import { TProduct, TProductsType, TSize } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { ProductCard } from '../ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Accessories.scss';
// import "./style.css"

//* Function of this component:
//*
//* Display additional accessories in one line. 
//* Items in line can be scrolled horizontally   
//*
export function Accessories({ size, type }: { size: TSize, type: TProductsType }): JSX.Element {

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
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

    let productData = products.filter(function (prod) {
        if (type === 'cachepot') {
            return prod.type === "plant" && prod.size === size;
        } else {
            return prod.type === "cachepot" && prod.size === size;
        }
    });

    const cardsList: JSX.Element[] = productData.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <aside className='accessories'>
            <Slider {...settings}>
                {cardsList}
            </Slider>
        </aside>
    )
}
