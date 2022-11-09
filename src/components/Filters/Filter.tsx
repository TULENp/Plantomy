import React from 'react'
import { Dropdown, Menu } from 'antd'
import './style.css'

export function Filter(): JSX.Element {
    const items = [
        { label: 'Популярные', key: 'Популярные' },
        { label: 'Новинки', key: 'Новинки' },
        { label: 'Сначала дешевые', key: 'Сначала-дешевые' },
        { label: 'Сначала дорогие', key: 'Сначала-дорогие' },
    ];

    //TODO add tabs, mb use antd Tabs or Segmented
    //TODO "Сложность ухода" should be radio
    //TODO add price selector
    //TODO change dropdown to display selected label (change items[0].label)

    return (
        <aside>
            <Dropdown menu={{ items }}>
                <a>{items[0].label}</a>
            </Dropdown>
            <h1>^растения^ ^кашпо^</h1>
            <div className="careComplexity">
                <h3>Сложность ухода</h3>
                <img src="" alt="easy" />
                <img src="" alt="normal" />
                <img src="" alt="hard" />
            </div>
            <h1>^цена^</h1>
        </aside>
    )
}
