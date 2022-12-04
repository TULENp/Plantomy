import Icon from '@ant-design/icons';
import { Carousel } from 'antd';
import { TProduct, TProductsType, TSize } from '../../types';
import { data } from '../../zDataExamples/Data';
import { useAppSelector } from '../hooks/redux';
import { ProductCard } from '../ProductCard';
import { Products } from '../Products';
// import "./style.css"

//* Function of this component:
//*
//* Display additional accessories in one line. 
//* Items in line can be scrolled horizontally   
//*
export function Accessories({ size, type }: { size: TSize, type: TProductsType }): JSX.Element {

    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    
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
            <Carousel
                className='carousel_news' slidesPerRow={5}
                autoplay={false} draggable={true} arrows={true} dots={false}
                nextArrow={<Icon component={() => (<img className='img_rightArrow' src="src\Assets\right-arrow.svg" />)} />}
                prevArrow={<Icon component={() => (<img className='img_rightArrow' src="src\Assets\left-arrow.svg" />)} />}
            >
                {cardsList}
            </Carousel>
        </aside>
    )
}
