import React, { useState } from 'react'
import { Button, Dropdown, MenuProps, Select, InputNumber  } from 'antd'
import Icon, {DownOutlined} from "@ant-design/icons"

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
    
    
    //TODO change dropdown to display selected label (change items[0].label)

    return (
        <aside className='filter'>
            {/* <Dropdown.Button type='primary' className='dropdown' trigger={["click"]} icon={<DownOutlined />}  menu={{ items }}>
                <a>{items[0].label}</a>
            </Dropdown.Button> */}
            {/* <Select placeholder="Кликни на меня">
            {items.map((item,index) => {
                return <Select.Option key={index} value={item}>{item}</Select.Option>
            })}
            </Select> */}
            <Select  className="dropdown" options={items} placeholder={items[0].label} />
            {/* TODO add tabs, mb use antd Tabs or Segmented */}
            <div className='btn_plants_cashpo'>
                <Button type='primary' className='btn_plants' icon={<Icon component={() => (<img className='img_plant' src="\src\Assets\plant.svg" />)} />}>Растения</Button>
                <Button className='btn_cashpo' icon={<Icon component={() => (<img className='img_cashpo' src="\src\Assets\cashpo.svg" />)} />}>Кашпо</Button>
            </div>
            
            <div className="careComplexity">
                {/* TODO should be radio */}
                <h3>Сложность ухода</h3>
                <img className='img_easy' src="\src\Assets\easy.svg" alt="easy" />
                <img className='img_middle' src="\src\Assets\middle.svg" alt="middle" />
                <img className='img_hard' src="\src\Assets\hard.svg" alt="hard" />
            </div>
            <div className='price_editor'>
                <InputNumber className='btn_from' placeholder='258' controls={false}/>
                <img className='line' src='\src\Assets\Line.svg'/>
                <InputNumber className='btn_to' placeholder='5688' controls={false}/>
                <Button className='btn_ok'>ок</Button>
            </div>
            
        </aside>
    )
}
