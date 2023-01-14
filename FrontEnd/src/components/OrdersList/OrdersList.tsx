import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { TOrder } from '../../types';
import './OrdersList.scss';

//* Function of this component:
//*
//* Display list of orders
//*
export function OrdersList(): JSX.Element {

    const { orders, isLoading, error } = useAppSelector(state => state.OrdersReducer)
    const navigate = useNavigate();

    const cols: ColumnsType<TOrder> = [
        {
            title: 'Номер',
            dataIndex: 'id',
            // render() {
            //     return {
            //       props: {
            //         style: { background:  "red" }
            //       },
            //     };
            //   }
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
            dataIndex: 'date',
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
                                <Table<TOrder> columns={cols} dataSource={orders} showSorterTooltip={false}
                                    onRow={(record) => {
                                        return {
                                            onClick: () => {
                                                navigate('/ordersList/' + record.id);
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
