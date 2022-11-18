import { Filter } from '../../components/Filters';
import { News as NewsItem } from '../../components/NewsItem';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
import './MainPage.scss';
import { Carousel } from 'antd';
import { Button } from 'antd';
import Icon, {LeftOutlined, RightOutlined} from "@ant-design/icons"

export function MainPage(): JSX.Element {
    // list for news carousel
    const news = [
        <NewsItem key={1} link={'/'} image='src\Assets\Ad1.png' />,
        <NewsItem key={2} link={'/'} image='src\Assets\Ad2.png' />,
        <NewsItem key={3} link={'/'} image='src\Assets\Ad3.png' />,
    ];
    return (
        <>
            <div className='search_bar'>
                <Button  className="btn_category"type='primary' icon={<Icon component={() => (<img className='img_leaf' src="\src\Assets\leafwhite.svg" />)} />} >Категории</Button>
                <SearchBar />
            </div>
            <section className='news_slider'>
                <Carousel
                    className='carousel_news'
                    autoplay={false}  draggable={true} arrows={true}
                    nextArrow={<Icon component={() => (<img className='img_rightArrow' src="src\Assets\right-arrow.svg" />)} />}
                    prevArrow={<Icon component={() => (<img className='img_leftArrow' src="src\Assets\left-arrow.svg" />)} />}
                >
                    {news}
                </Carousel>
            </section>
            <div className="products">
                <Filter />
                <Products plants={true}/>
            </div>
        </>
    )
}
