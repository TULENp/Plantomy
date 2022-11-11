import React, { useState } from 'react'
import { Dropdown, MenuProps } from 'antd'
import './Filter.scss'

export function Filter(): JSX.Element {

    // items of sort dropdown
    const items = [
        { label: 'Популярные', key: 'Популярные' },
        { label: 'Новинки', key: 'Новинки' },
        { label: 'Сначала дешевые', key: 'Сначала дешевые' },
        { label: 'Сначала дорогие', key: 'Сначала дорогие' },
    ];
    // sets the sort order. By default set "Популярные"
    const [orderBy, setOrderBy] = useState<string>(items[0].key)

    // sort products on main page
    const sort: MenuProps['onClick'] = e => {
        setOrderBy(e.key);
        //TODO sort products 
    };

    return (
        <aside>
            <Dropdown menu={{ items, onClick: sort }}>
                <a>{orderBy}</a>
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
