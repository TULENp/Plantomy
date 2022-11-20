import React from 'react'
import { TCard } from '../../types'
import { Button } from 'antd'
import { Accessories } from '../../components/Accessories'
import './ProductCard.scss'
import Icon from '@ant-design/icons';

//* Function of this component:
//*
//* Display product info. Page version
//*
export function ProductCard({ image, title, price, description }: TCard): JSX.Element {
    return (
        <section className='productCard'>
            <div className='cont_main_info_plant'>
                <div className='wrap_img_product'>
                    <img className='img_product' src={image} alt={title} />
                </div>
                <div className='cont_product_info'>
                    <h3 className='title'>{title}</h3>
                    <h4 className='description'>{description}</h4>
                    <div className='cont_price_pot'>
                        <h3 className='price'>{price} ₽</h3>
                        <div className='cont_pot_h4'>
                            <img src="Pot.svg" alt="potImg" />
                            <h4>В стоимость входит горшок</h4>
                        </div>
                    </div>
                    <div className='cont_in_cart_heart'>
                        <Button type='primary' className='btn_in_сart'>В корзину</Button>
                        <img className='btn_heart' src="EmptyHeart.svg" alt="favorite" />
                    </div>
                </div>    
            </div>
            <hr className='line1'></hr>
            <div className='cont_btns_anchor'>
                <Button type='primary' className='btn_cashpo' icon={<Icon component={() => (<img className='img_pot' src="\src\Assets\potWhite.png" />)} />} >Кашпо</Button>
                <Button type='ghost' className='btn_info' icon={<Icon component={() => (<img className='img_info' src="\src\Assets\infoBrown.png" />)} />}>Информация</Button>
                <Button type='ghost' className='btn_care' icon={<Icon component={() => (<img className='img_care' src="\src\Assets\careBrown.png" />)} />}>Уход</Button>
            </div>
            <hr className='line2'></hr>
            <div className='plant_all_info'>
                <div className='section_accessories'>
                    <div className='h_caspho'>
                        <img width='50' height='50' src='src\Assets\cachepot.svg'></img>
                        <h3>Подходящие кашпо</h3>
                    </div>
                    <div className='cont_accessories'>
                        <Accessories />
                    </div>
                </div>

            </div>

        </section>
    )
}
