import React from 'react'
import { Input, Space } from 'antd'
import './SearchBar.scss';
const { Search } = Input;

export function SearchBar(): JSX.Element {
    return (
        // <input type="text" name="search" id="search" placeholder='SearchBar' />
            <Search placeholder="Поиск на Plantomy" size="large" style={{width:665}} enterButton />
        
    )
}
