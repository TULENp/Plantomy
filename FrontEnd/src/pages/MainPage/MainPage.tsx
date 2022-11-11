import { Filter } from '../../components/Filters';
import { News } from '../../components/News';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
import React from 'react'
import './MainPage.scss';

export function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <div className="products">
                <Filter />
                <Products />
            </div>
        </>
    )
}
