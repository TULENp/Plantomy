import { Input, Radio } from 'antd'
import React from 'react'
import './OrderPage.scss'

export function OrderPage(): JSX.Element {
    return (
        <>
            <div className='order_page'>
                <div className='wrapper_info_order'>
                    <div className='wrapper_input_info'>
                        <h1 className='h1_checkout'>Оформление заказа</h1>
                        <h2 className='h2_contact_info'>Контактные данные</h2>
                        <div className='wrapper_contact_info'>
                            <div className='inputs input_name'>
                                <h3>Имя</h3>
                                <Input placeholder='Введите ваше имя'/>
                            </div>
                            <div className='inputs input_surname'>
                                <h3>Фамилия</h3>
                                <Input placeholder='Введите вашу фамилию'/>
                            </div>
                            <div className='inputs input_lastname'>
                                <h3>Отчество</h3>
                                <Input placeholder='Введите ваше отчество'/>
                            </div>
                            <div className='inputs input_phone'>
                                <h3>Телефон</h3>
                                <Input placeholder='+7'/>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper_delivery_info'>
                        <h2>Способ доставки</h2>
                        <div className='type_delivery'>
                            <h3>Тип доставки</h3>
                            <Radio.Group className='radio_group_type_delivery'>
                                <Radio.Button defaultChecked value='delivery' >Доставка</Radio.Button>
                                <Radio.Button value='pickup'>Самовывоз</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className='wrapper_inputs_delivery_info'>
                            <div className='inputs input_delivery_city'>
                                <h3>Город доставки</h3>
                                <Input placeholder='Казань'/>
                            </div>
                            <div className='inputs input_street'>
                                <h3>Улица</h3>
                                <Input placeholder='Пушкина'/>
                            </div>
                            <div className='inputs input_flat'>
                                <h3>Дом</h3>
                                <Input placeholder='16'/>
                            </div>
                            <div className='inputs input_phone'>
                                <h3>Квартира</h3>
                                <Input placeholder='12'/>
                            </div>
                            <div className='inputs input_index'>
                                <h3>Индекс</h3>
                                <Input placeholder='420030'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrapper_confirm_order'>

                </div>
            </div>
        </>
    )
}
