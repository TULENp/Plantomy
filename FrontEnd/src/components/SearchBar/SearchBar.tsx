import { Input, ConfigProvider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import './SearchBar.scss';
const { Search } = Input;

//* Function of this component:
//*
//* Change search value from FilterSlice.tsx
//*
export function SearchBar(): JSX.Element {

    const { search } = useAppSelector(state => state.FilterReducer.filter);
    const dispatch = useAppDispatch();

    //FIXME fix search bug first 
    function changeValue(e: any) {
        dispatch(filterSlice.actions.changeTitle(e.value));
    }

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
                value={search} onSearch={searchProduct} onChange={changeValue} />
        </ConfigProvider>
    )
}
