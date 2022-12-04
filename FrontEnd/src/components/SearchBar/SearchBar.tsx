import React, { useState } from 'react'
import { Input, Space, ConfigProvider } from 'antd'
import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import { SearchProps } from 'antd/es/input';
const { Search } = Input;

export function SearchBar(): JSX.Element {

    const { filter } = useAppSelector(state => state.FilterReducer);
    const { productTitle } = filter;
    const dispatch = useAppDispatch();

    // const [searchValue, setSearchValue] = useState<string>('')

    // function changeValue(e: any) {
    //     setSearchValue(e.value);
    // }

    function searchProduct(value: string) {
        dispatch(filterSlice.actions.changeTitle(value));
        //TODO add an anchor to products
    }
    return (
        // <input type="text" name="search" id="search" placeholder='SearchBar' />
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#000000',
                        colorPrimaryActive: '#000000',
                        colorPrimaryHover: '#2F2F2F',
                    },
                },
            }}
        >
            <Search placeholder="Поиск на Plantomy" size="large" style={{ width: 665 }} enterButton={true}
                value={productTitle} onSearch={searchProduct} />
        </ConfigProvider>
    )
}
