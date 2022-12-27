import { Filter } from '../../components/Filters';
import { NewsItem } from '../../components/NewsItem';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
import { Carousel } from 'antd';
import { Button } from 'antd';
import Icon from "@ant-design/icons"
import { useAppSelector } from '../../hooks/redux';
import './MainPage.scss';

export function MainPage(): JSX.Element {

    const { filter } = useAppSelector(state => state.FilterReducer);

    // list for news carousel
    const news = [
        <NewsItem key={1} link={'/'} image='News1.png' />,
        <NewsItem key={2} link={'/'} image='News2.png' />,
        <NewsItem key={3} link={'/'} image='News3.png' />,
    ];
    return (
        <>
            <div className='search_bar'>
                <Button className="btn_category" type='primary' icon={<Icon component={() => (<img className='img_leaf' src="\leafwhite.svg" />)} />} >Категории</Button>
                <SearchBar />
            </div>
            {filter.productTitle
                ?
                <br />
                :
                <section className='news_slider'>
                    <Carousel
                        className='carousel_news'
                        autoplay={true} draggable={true} arrows={true} dots={false}
                        nextArrow={<Icon component={() => (<img className='img_rightArrow' src="/right-arrow.svg" />)} />}
                        prevArrow={<Icon component={() => (<img className='img_rightArrow' src="/left-arrow.svg" />)} />}
                    >
                        {news}
                    </Carousel>
                </section>
            }
            <div className="products">
                <Filter />
                <Products />
            </div>
        </>
    )
}
