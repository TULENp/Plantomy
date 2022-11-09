import React, { useState } from 'react';
import { Filter } from '../../components/Filters';
import { News } from '../../components/News';
import { ProductCard_mini } from '../../components/ProductCard_mini';
import { SearchBar } from '../../components/SearchBar';
import {data} from '../../Data'
import './style.css';

export function MainPage(): JSX.Element {

    //todo move to it's own folder/file
    //! this code used 2 times
    //*start
    type TCard = {
        id: number,
        image: string,
        title: string,
        price: number,
    }

    const [cards, setCards] = useState<TCard[]>(loadCards());
    // const cardsArray
    function loadCards(): TCard[] {
        //get cards data from backend 
        return data;
    }
    const cardsList: JSX.Element[] = cards.map((card: TCard) => {
        return (
            <ProductCard_mini key={card.id} id={card.id} image={card.image} title={card.title} price={card.price} />
        )
    });
    //*end

    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <div className="products">
                <Filter />
                <section className='cards'>
                    {cardsList}
                </section>
            </div>
        </>
    )
}
