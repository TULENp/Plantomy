import React, { useState } from 'react'
import { Button, Dropdown, MenuProps, Select, InputNumber, Tabs, ConfigProvider } from 'antd'
import './Filters.scss'
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';

export function Filter(): JSX.Element {

    // items of sort dropdown
    const items = [
        { label: 'Популярные', value: 'byPopularity' },
        { label: 'Новинки', value: 'byNovelty' },
        { label: 'Сначала дешевые', value: 'cheapFirst' },
        { label: 'Сначала дорогие', value: 'expensiveFirst' },
    ];

    return (
        <aside className='filter'>
            <Select className="dropdown" options={items} defaultValue={items[0].value} />
            {/* TODO add tabs, mb use antd Tabs or Segmented */}
            <div className='btn_plants_cachepot'>
                <Button type='primary' className='btn_plants' icon={<Icon component={() => (<img className='img_plant' src="\src\Assets\plant.svg" />)} />}>Растения</Button>
                <Button className='btn_cachepot' icon={<Icon component={() => (<img className='img_cachepot' src="\src\Assets\cachepot.svg" />)} />}>Кашпо</Button>
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
                    <InputNumber className='btn_from' placeholder='258' controls={false} />
                    <img className='line' src='\src\Assets\Line.svg' />
                    <InputNumber className='btn_to' placeholder='5688' controls={false} />
                    <Button className='btn_ok'>ок</Button>
                </div>
            </div>
        </aside>
    )
}
