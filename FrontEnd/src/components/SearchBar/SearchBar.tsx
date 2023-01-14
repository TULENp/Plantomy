import { Input, ConfigProvider } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import './SearchBar.scss';
const { Search } = Input;

//* Function of this component:
//*
//* Change search value from FilterSlice.tsx
//*
export function SearchBar(): JSX.Element {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');

    //FIXME fix search bug first 
    function changeValue(e: any) {
        setSearchValue(e.target.value);
    }

    function searchProduct() {
        dispatch(filterSlice.actions.changeTitle(searchValue));
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
                value={searchValue} onSearch={searchProduct} onChange={changeValue} />
        </ConfigProvider>
    )
}
