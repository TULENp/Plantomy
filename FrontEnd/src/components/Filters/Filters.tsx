import React, { useEffect, useRef, useState } from 'react'
import { Button, Dropdown, MenuProps, Select, InputNumber, Tabs, ConfigProvider, Radio, RadioChangeEvent, InputNumberProps } from 'antd'
import './Filters.scss'
import Icon from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import { TProductsType, TSortBy } from '../../types';

export function Filter(): JSX.Element {

    const { filter } = useAppSelector(state => state.FilterReducer)
    const { productType, sortBy, minPrice, maxPrice } = filter;
    const [fromPrice, setFromPrice] = useState<number | null>(minPrice);
    const [toPrice, setToPrice] = useState<number | null>(maxPrice);
    const dispatch = useAppDispatch();

    function resetFilter() {
        dispatch(filterSlice.actions.resetFilter());
        setFromPrice(null);
        setToPrice(null);
    }

    useEffect(() => {
        resetFilter()
    }, [])

    // items of sort dropdown
    const items: { label: string, value: TSortBy }[] = [
        { label: 'Популярные', value: 'byPopularity' },
        { label: 'Новинки', value: 'byNovelty' },
        { label: 'Сначала дешевые', value: 'cheapFirst' },
        { label: 'Сначала дорогие', value: 'expensiveFirst' },
    ];

    //change productType state to selected
    function ChangeType(e: RadioChangeEvent) {
        dispatch(filterSlice.actions.changeType(e.target.value));
    }
    // change sortBy state to selected by Select
    function sortProducts(value: TSortBy) {
        dispatch(filterSlice.actions.changeSort(value));
    };

    function changeMinPrice(value: any) {
        setFromPrice(value);
    }
    function changeMaxPrice(value: any) {
        setToPrice(value);
    }
    function filterPrice() {
        dispatch(filterSlice.actions.changeMinPrice(fromPrice!));
        dispatch(filterSlice.actions.changeMaxPrice(toPrice!));
    }
    return (
        <aside className='filter'>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: 'Montserrat',
                        fontSize: 20,
                        colorPrimary: '#F19173',
                        colorBgBase: '#F19173',
                        // colorText:'#FFFFFF',
                        colorBgElevated: '#FFFFFF',
                        // colorTextBase:'#FFFFFF',
                        // colorTextPlaceholder:'#000000',
                        colorTextPlaceholder: '#FFFFFF',
                        colorTextDisabled: '#FFFFFF',
                    }
                }}
            >
                <Select className="dropdown" options={items} value={sortBy} onSelect={sortProducts} />
            </ConfigProvider>
            <Radio.Group onChange={ChangeType} value={productType} className='radio_group_filter'>
                <Radio.Button value="plant" className='radio_plant_filter'>
                    <img className='img_plant' src="\src\Assets\plant.svg" />
                    Растения
                </Radio.Button>
                <Radio.Button value="cachepot" className='radio_cachepot_filter'>
                    <img className='img_cachepot' src="\src\Assets\cachepot.svg" />
                    Кашпо
                </Radio.Button>
            </Radio.Group>
            {productType === "plant" &&
                <div className="careComplexity">
                    {/* TODO should be radio */}
                    <h3>Сложность ухода</h3>
                    <img className='img_easy' src="\src\Assets\easy.svg" alt="easy" />
                    <img className='img_middle' src="\src\Assets\middle.svg" alt="middle" />
                    <img className='img_hard' src="\src\Assets\hard.svg" alt="hard" />
                </div>
            }
            <div className='cont_price_editor'>
                <h3 className='h_price_editor'>Цена, ₽</h3>
                <div className='price_editor'>
                    <InputNumber className='btn_from' placeholder='258' controls={false}
                        onChange={changeMinPrice} value={fromPrice} />
                    <img className='line' src='\src\Assets\Line.svg' />
                    <InputNumber className='btn_to' placeholder='5688' controls={false}
                        onChange={changeMaxPrice} value={toPrice} />
                    <Button className='btn_ok' onClick={filterPrice}>ок</Button>
                </div>
            </div>
            <button onClick={resetFilter}>Сбросить фильтры</button>
        </aside >
    )
}
