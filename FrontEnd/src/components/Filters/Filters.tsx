import React, { useRef, useState } from 'react'
import { Button, Dropdown, MenuProps, Select, InputNumber, Tabs, ConfigProvider, Radio, RadioChangeEvent } from 'antd'
import './Filters.scss'
import Icon from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import { TProductsType, TSortBy } from '../../types';

export function Filter(): JSX.Element {

    const { productType } = useAppSelector(state => state.FilterReducer)
    const dispatch = useAppDispatch();

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

    function filterPrice() {
        // dispatch(filterSlice.actions.changeMinPrice(fromPrice));
        // dispatch(filterSlice.actions.changeMaxPrice(toPrice));
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
                <Select className="dropdown" options={items} defaultValue={items[0].value} onSelect={sortProducts} />
            </ConfigProvider>
            <Radio.Group onChange={ChangeType} value={productType}>
                <Radio.Button value="plant">
                    <Icon component={() => (<img className='img_plant' src="\src\Assets\plant.svg" />)} />
                    Растения
                </Radio.Button>
                <Radio.Button value="cachepot">
                    <Icon component={() => (<img className='img_cachepot' src="\src\Assets\cachepot.svg" />)} />
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
                    <InputNumber className='btn_from' placeholder='258' controls={false} />
                    <img className='line' src='\src\Assets\Line.svg' />
                    <InputNumber className='btn_to' placeholder='5688' controls={false} />
                    <Button className='btn_ok' onClick={filterPrice}>ок</Button>
                </div>
            </div>
        </aside >
    )
}
