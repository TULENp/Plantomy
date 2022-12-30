import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { TOrder } from '../../types';
import { GetAllOrders } from '../../store/reducers/ActionCreators';
import { useNavigate } from 'react-router-dom';

//* Function of this component:
//*
//* Display list of orders
//*
export function OrderList(): JSX.Element {

    const [orders, setOrders] = useState<TOrder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getOrders();
    }, [])

    async function getOrders() {
        const result: TOrder[] = await GetAllOrders();

        setOrders(result);
        setIsLoading(false);
    }

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
            {/* add row headers mb use grid */}
            {isLoading
                ?
                <h1>Загрузка...</h1>
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
        </aside>
    )
}
