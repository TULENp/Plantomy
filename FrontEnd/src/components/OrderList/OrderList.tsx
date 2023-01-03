import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { TOrder } from '../../types';
import { GetAllOrders } from '../../store/reducers/ActionCreators';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

//* Function of this component:
//*
//* Display list of orders
//*
export function OrderList(): JSX.Element {

    const { orders, isLoading, error } = useAppSelector(state => state.OrdersReducer)
    const navigate = useNavigate();

    const cols = [
        {
            title: 'Номер',
            dataIndex: 'id',
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

    return (
        <aside className='orderList'>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {orders.length === 0
                                ?
                                <h1>Список заказов пуст</h1>
                                :
                                <Table columns={cols} dataSource={orders}
                                    onRow={(record) => {
                                        return {
                                            onClick: () => {
                                                navigate('/completedOrder:' + record.id);
                                            },
                                        };
                                    }} />
                            }
                        </>
                    }
                </>
            }
        </aside>
    )
}
