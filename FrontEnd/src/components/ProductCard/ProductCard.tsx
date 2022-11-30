import React, { useState } from 'react'
import { TProduct } from '../../types'
import { Button, Radio } from 'antd'
import { Accessories } from '../../components/Accessories'
import './ProductCard.scss'
import Icon from '@ant-design/icons';

//* Function of this component:
//*
//* Display product info. Page version
//*
export function ProductCard({ image, title, price, description }: TProduct): JSX.Element {
    const [quantityActive,setQuantityActive] = useState(false);
    const [quantityNum, setQuantityNum] = useState(1);

    function Increment () {
        if(quantityNum < 99) {
            setQuantityNum(quantityNum + 1);
        }
    }

    function Decrement () {
        if(quantityNum > 1) {
            setQuantityNum(quantityNum - 1);
        }
        else{
            setQuantityActive(false);
        }
    }

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
                        {
                            quantityActive
                            ? 
                            <div className='btn_quantity'>
                                <span className='minus' onClick={Decrement}>-</span>
                                <span className='num'>{quantityNum}</span>
                                <span className='plus' onClick={Increment} >+</span>
                            </div>
                            :
                            <Button type='primary' className='btn_in_сart' onClick={()=> {setQuantityActive(true)}}>В корзину</Button>
                        }
                        
                        <img className='btn_heart' src="EmptyHeart.svg" alt="favorite" />
                    </div>
                </div>    
            </div>
            <hr className='line1'></hr>
            {/* <div className='cont_btns_anchor'> */}
                {/* <Button type='primary' className='btn_cashpo' icon={<Icon component={() => (<img className='img_pot' src="\src\Assets\potWhite.png" />)} />} >Кашпо</Button>
                <Button type='ghost' className='btn_info' icon={<Icon component={() => (<img className='img_info' src="\src\Assets\infoBrown.png" />)} />}>Информация</Button>
                <Button type='ghost' className='btn_care' icon={<Icon component={() => (<img className='img_care' src="\src\Assets\careBrown.png" />)} />}>Уход</Button> */}
                {/* <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Кашпо</Radio.Button>
                    <Radio.Button value="b">Информация</Radio.Button>
                    <Radio.Button value="c">Уход</Radio.Button>
                </Radio.Group> */}
                <div className='radio_info_product'>
                <input className='radio__input_product' type='radio' value="cachepot" name='myInfoProduct' id='Anchor1'/>
                <label className='radio__label_product' htmlFor='Anchor1'>
                <div className='img_pot_test'/>Кашпо</label>
                <input className='radio__input_product' type='radio' value="info" name='myInfoProduct' id='Anchor2'/>
                <label className='radio__label_product' htmlFor='Anchor2'>
                <div className='img_info_test'/>Информация</label>
                <input className='radio__input_product' type='radio' value="care" name='myInfoProduct' id='Anchor3'/>
                <label className='radio__label_product' htmlFor='Anchor3'>
                <div className='img_care_test'/>Уход</label>
                </div>
            {/* </div> */}
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
                <div className='section_info'>
                    <div className='h_info'>
                        <img width='50' height='50' src='src\Assets\infoBrown.png'></img>
                        <h3>Информация</h3>
                    </div>
                    <div className='cont_info'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
                    </div>
                </div>
                <div className='section_care'>
                    <div className='h_care'>
                        <img width='50' height='50' src='src\Assets\careBlue.png'></img>
                        <h3>Уход</h3>
                    </div>
                    <div className='cont_care'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
