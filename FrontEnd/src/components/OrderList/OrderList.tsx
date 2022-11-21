import { Table } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../DataExamples/Data';
import { data_orders } from '../../DataExamples/Data_orders';
import { TCard } from '../../types';
// import "./style.css"

//* Function of this component:
//*
//* Display list of orders
//*
export function OrderList(): JSX.Element {

    //TODO get "data" from props
    //get cards data from backend 
    const [cards, setCards] = useState<TCard[]>(data);

    const cols = [
        {
            title: 'Номер',
            dataIndex: 'number',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
        },
        {
            title: 'Сумма',
            dataIndex: 'sum',
        },
        {
            title: 'Оформлен',
            dataIndex: 'date'
        }
    ];

    // const orderList: JSX.Element[] = cards.map((card: TCard) => {
    //     return (
    //         <Link to={"/completedOrder"}>
    //             <div className="order">
    //                 {/* TODO mb use antd Table */}
    //                 <h2>Номер заказа {card.id}</h2>
    //             </div>
    //         </Link>
    //     )
    // })

    return (
        <aside className='orderList'>
            {/* add row headers mb use grid */}
            <Table columns={cols} dataSource={data_orders} />
        </aside>
    )
}
