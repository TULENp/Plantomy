import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { GetOrder } from '../../store/reducers/ActionCreators';
import { TOrder, TProduct } from '../../types';
import './CompletedOrderPage.scss'

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
        <div className='completed_order_page'>
            <h1>Заказ #3352</h1>
            <div className='notification'>
                <img alt='info_icn'></img>
                <span>На указанную вами электронную почту пришёл трек-номер с вашим заказом.</span>
            </div>
            <div className='wrapper_user_order_info'>
                <div className='container_user_info'>
                    <div className='container_address'>
                        <h2>Адрес</h2>
                        <img src='public\place_icon.png' alt='address_icn'></img>
                        <h3>г. Казань, ул. Пушкина, дом 16</h3>
                    </div>
                    <div className='container_recipient'>
                        <h2>Получатель</h2>
                        <img alt='user_order_icn'></img>
                        <div>
                            <h3>Евгений Николаевич Понасенков</h3>
                            <h3>kildan325@gmail.com</h3>
                            <h3>+79991583906</h3>
                        </div>
                    </div>
                </div>
                <div className='container_order_info'>
                    <h3>Товары <span>6777 ₽</span> </h3>
                    <h3>Доставка <span>399 ₽</span> </h3>
                    <h3>Итого <span>7 176 ₽</span> </h3>
                </div>
            </div>
        </div>
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
