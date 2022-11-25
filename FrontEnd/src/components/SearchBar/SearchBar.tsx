import React from 'react'
import { Input, Space, ConfigProvider } from 'antd'
import './SearchBar.scss';
const { Search } = Input;

export function SearchBar(): JSX.Element {
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
            <Search placeholder="Поиск на Plantomy" size="large" style={{ width: 665 }} enterButton />
        </ConfigProvider>
    )
}
