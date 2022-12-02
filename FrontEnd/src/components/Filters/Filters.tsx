import React, { useRef, useState } from 'react'
import { Button, Dropdown, MenuProps, Select, InputNumber, Tabs, ConfigProvider } from 'antd'
import './Filters.scss'
import Icon from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/reducers/filterSlice';
import { TSortBy } from '../../types';

export function Filter(): JSX.Element {

    const dispatch = useAppDispatch();

    // items of sort dropdown
    const items: { label: string, value: TSortBy }[] = [
        { label: 'Популярные', value: 'byPopularity' },
        { label: 'Новинки', value: 'byNovelty' },
        { label: 'Сначала дешевые', value: 'cheapFirst' },
        { label: 'Сначала дорогие', value: 'expensiveFirst' },
    ];

    //? mb find a better way to call changeType()
    // change productType state to 'cachepot'
    function toCachepot() {
        dispatch(filterSlice.actions.changeType('cachepot'));
    }

    // change productType state to 'plant'
    function toPlants() {
        dispatch(filterSlice.actions.changeType('plant'));
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
            <div className='radio_plants_cachepot'>
                <input className='radio__input' type='radio' value="plants" name='myRadio' id='radio1' />
                <label className='radio__label' onClick={toPlants} htmlFor='radio1'>
                    <Icon component={() => (<img className='img_plant' src="\src\Assets\plant.svg" />)} />
                    Растения
                </label>
                <input className='radio__input' type='radio' value="cachepot" name='myRadio' id='radio2' />
                <label className='radio__label' onClick={toCachepot} htmlFor='radio2'>
                    <Icon component={() => (<img className='img_cachepot' src="\src\Assets\cachepot.svg" />)} />
                    Кашпо
                </label>
            </div>
            <div className="careComplexity">
                {/* TODO should be radio */}
                <h3>Сложность ухода</h3>
                <img className='img_easy' src="\src\Assets\easy.svg" alt="easy" />
                <img className='img_middle' src="\src\Assets\middle.svg" alt="middle" />
                <img className='img_hard' src="\src\Assets\hard.svg" alt="hard" />
            </div>
            <div className='cont_price_editor'>
                <h3 className='h_price_editor'>Цена, ₽</h3>
                <div className='price_editor'>
                    <InputNumber className='btn_from' placeholder='258' controls={false}/>
                    <img className='line' src='\src\Assets\Line.svg' />
                    <InputNumber className='btn_to' placeholder='5688' controls={false}/>
                    <Button className='btn_ok' onClick={filterPrice}>ок</Button>
                </div>
            </div>
        </aside>
    )
}
