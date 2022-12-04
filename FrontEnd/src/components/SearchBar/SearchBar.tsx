import React from 'react'
import { Input, Space, ConfigProvider } from 'antd'
import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
const { Search } = Input;

export function SearchBar(): JSX.Element {
    const dispatch = useAppDispatch();

    function searchProduct(value: string) {
        dispatch(filterSlice.actions.changeTitle(value));
        //TODO clear search value
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
            <Search placeholder="Поиск на Plantomy" size="large" style={{ width: 665 }} enterButton={true} onSearch={searchProduct} />
        </ConfigProvider>
    )
}
