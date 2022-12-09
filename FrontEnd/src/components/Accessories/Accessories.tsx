import Icon from '@ant-design/icons';
import { Carousel } from 'antd';
import { TProduct, TProductsType, TSize } from '../../types';
import { data } from '../../zDataExamples/Data';
import { useAppSelector } from '../hooks/redux';
import { ProductCard } from '../ProductCard';
import { Products } from '../Products';
import './Accessories.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        slidesToShow: 4,
        slidesToScroll: 1,
        // initialSlide: -1,
        nextArrow: <img src='right-arrow.svg' />,
        prevArrow: <img src='left-arrow.svg' />
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
            {/* <Carousel
                className='carousel_products' slidesToShow={4}
                autoplay={false} draggable={true} arrows={true} dots={false}
                nextArrow={<Icon component={() => (<img className='img_rightArrow' src="right-arrow.svg" />)} />}
                prevArrow={<Icon component={() => (<img className='img_rightArrow' src="left-arrow.svg" />)} />}
            >
                {cardsList}
            </Carousel> */}
            <Slider {...settings}>
                {cardsList}
            </Slider>
        </aside>
    )
}
