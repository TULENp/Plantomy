import React from 'react'
import { OrderList } from '../../components/OrderList'

export function OrderListPage(): JSX.Element {
    return (
        <>
            <h1>Заказы</h1>
            <OrderList />
        </>
    )
}
