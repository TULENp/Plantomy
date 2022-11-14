import { Filter } from '../../components/Filters';
import { News } from '../../components/News';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
import React from 'react'
import './MainPage.scss';
import { Button } from 'antd';
import Icon from "@ant-design/icons"

export function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
                <div className='search_bar'>
                    <Button  className="btn_category"type='primary' icon={<Icon component={() => (<img className='img_leaf' src="\src\Assets\leafwhite.svg" />)} />} >Категории</Button>
                    <SearchBar />
                </div>
            <News />
            <div className="products">
                <Filter />
                <Products />
            </div>
        </>
    )
}
