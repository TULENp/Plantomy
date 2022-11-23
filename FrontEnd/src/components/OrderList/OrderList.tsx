import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../zDataExamples/Data';
import { data_orders } from '../../zDataExamples/Data_orders';
import { TCard } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/ActionCreators';
// import "./style.css"

//* Function of this component:
//*
//* Display list of orders
//*
export function OrderList(): JSX.Element {

    //TODO get "data" from props
    //get cards data from backend 
    const [cards, setCards] = useState<TCard[]>(data);

    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    // const cols = [
    //     {
    //         title: 'Номер',
    //         dataIndex: 'number',
    //     },
    //     {
    //         title: 'Статус',
    //         dataIndex: 'status',
    //     },
    //     {
    //         title: 'Сумма',
    //         dataIndex: 'sum',
    //     },
    //     {
    //         title: 'Оформлен',
    //         dataIndex: 'date'
    //     }
    // ];

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
    ]
    return (
        <aside className='orderList'>
            {/* add row headers mb use grid */}
            {isLoading && <h1>Загрузка</h1>}
            {error && <h1>Ошибка</h1>}
            <Table columns={cols} dataSource={users} />
        </aside>
    )
}
