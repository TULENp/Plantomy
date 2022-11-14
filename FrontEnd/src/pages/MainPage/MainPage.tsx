import { Filter } from '../../components/Filters';
import { News as NewsItem } from '../../components/NewsItem';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
import React from 'react'
import './MainPage.scss';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import Icon, { NodeExpandOutlined } from '@ant-design/icons';

export function MainPage(): JSX.Element {
    // list for news carousel
    const news = [
        <NewsItem key={1} link={'https://www.meme-arsenal.com/memes/17673feff1cc6e1fb7ce1a79d12d338b.jpg'} image={'news1.jpg'} />,
        <NewsItem key={2} link={'https://www.meme-arsenal.com/memes/17673feff1cc6e1fb7ce1a79d12d338b.jpg'} image={'news2.jpg'} />,
        <NewsItem key={3} link={'https://www.meme-arsenal.com/memes/17673feff1cc6e1fb7ce1a79d12d338b.jpg'} image={'news3.jpg'} />,
        <NewsItem key={3} link={'https://www.meme-arsenal.com/memes/17673feff1cc6e1fb7ce1a79d12d338b.jpg'} image={'news4.png'} />
    ];
    return (
        <>
            <SearchBar />
            <section className='news_slider'>
                <Carousel
                    autoplay
                    autoplaySpeed={4000} draggable={true}
                    arrows={true} nextArrow={<Icon component={() => (<img className='img_cachepot' src="right-arrow.svg" />)} />}
                >
                    {news}
                </Carousel>
            </section>
            <div className="products">
                <Filter />
                <Products />
            </div>
        </>
    )
}
