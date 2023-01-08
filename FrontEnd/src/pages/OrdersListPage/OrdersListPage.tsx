
import { OrdersList } from '../../components/OrdersList'

export function OrdersListPage(): JSX.Element {
    return (
        <>
        <div className='orders_list_page'>
            <h1>Заказы</h1>
            <OrdersList />
        </div>
        </>
    )
}
