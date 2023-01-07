import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { GetOrder } from '../../store/reducers/ActionCreators';
import { TOrder, TProduct } from '../../types';

export function CompletedOrderPage(): JSX.Element {

    const { id } = useParams();
    const [orderData, setOrderData] = useState<TOrder>();
    const [isLoading, setIsLoading] = useState(true);

    async function GetProd() {
        const order: TOrder = await GetOrder(+(id || -1));

        setOrderData(order);
        setIsLoading(false);
    }

    useEffect(() => {
        GetProd();
    }, [id]);

    let cardsList: JSX.Element[] = [];
    if (orderData) {
        cardsList = orderData?.goods.map((prod: TProduct) => {
            return (
                <ProductCard product={prod} cardType={'mini'} />
            )
        })
    }

    return (
        <>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {!orderData
                        ?
                        <h1>Заказ не существует</h1>
                        :
                        <>
                            <h1>Номер: {orderData?.id}</h1>
                            <h1>Дата: {orderData?.date}</h1>
                            <h1>Адрес: {orderData?.address}</h1>
                            <h1>Сумма: {orderData?.sum}</h1>
                            <h1>Статус: {orderData?.status}</h1>
                            {cardsList}
                        </>
                    }
                </>
            }
        </>
    )
}
