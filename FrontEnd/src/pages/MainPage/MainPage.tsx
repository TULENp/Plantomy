import { Filter } from '../../components/Filters';
import { NewsItem } from '../../components/NewsItem';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
// import { Carousel } from 'antd';
import Slider from "react-slick";
import { Button } from 'antd';
import Icon from "@ant-design/icons"
import { useAppSelector } from '../../hooks/redux';
import './MainPage.scss';

export function MainPage(): JSX.Element {

    const { filter } = useAppSelector(state => state.FilterReducer);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: -1,
        nextArrow: <img src='right-arrow.svg' />,
        prevArrow: <img src='left-arrow.svg' />
    }
    // list for news carousel
    const news = [
        <NewsItem key={1} link={'/'} image='/News1.png' />,
        <NewsItem key={2} link={'/'} image='/News2.png' />,
        <NewsItem key={3} link={'/'} image='/News3.png' />,
    ];


    return (
        <>
            <div className='search_bar'>
                <Button className="btn_category" type='primary' icon={<Icon component={() => (<img className='img_leaf' src="/leafwhite.svg" />)} />} >Категории</Button>
                <SearchBar />
            </div>
            {/* TODO navigate to searchPage */}
            {filter.search
                ?
                <br />
                :
                <section className='news_slider'>
                    <Slider {...settings}>
                        {news}
                    </Slider>
                </section>
            }
            <div className="products">
                <Filter />
                <Products />
            </div>
        </>
    )
}
