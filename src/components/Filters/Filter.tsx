import React from 'react'
import { Dropdown, Menu } from 'antd'
import './Filter.scss'

export function Filter(): JSX.Element {
    const items = [
        { label: 'Популярные', key: 'Популярные' },
        { label: 'Новинки', key: 'Новинки' },
        { label: 'Сначала дешевые', key: 'Сначала-дешевые' },
        { label: 'Сначала дорогие', key: 'Сначала-дорогие' },
    ];

    //TODO change dropdown to display selected label (change items[0].label)

    return (
        <aside className='filter'>
            <Dropdown menu={{ items }}>
                <a>{items[0].label}</a>
            </Dropdown>
            {/* TODO add tabs, mb use antd Tabs or Segmented */}
            <h1>^растения^ ^кашпо^</h1>
            <div className="careComplexity">
                {/* TODO should be radio */}
                <h3>Сложность ухода</h3>
                <img src="" alt="easy" />
                <img src="" alt="normal" />
                <img src="" alt="hard" />
            </div>
            {/* TODO add price selector */}
            <h1>^цена^</h1>
        </aside>
    )
}
