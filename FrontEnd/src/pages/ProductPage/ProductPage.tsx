import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accessories } from '../../components/Accessories'
import { ProductCard } from '../../components/ProductCard'
import { data } from '../../zDataExamples/Data'
import { TProduct } from '../../types'
import './ProductPage.scss'

export function ProductPage(): JSX.Element {

    //scroll to top on page render
    window.scrollTo(0, 0);

    //TODO get selected product (card) from db
    const { id } = useParams();
    const productID: number = id ? (+id.split(":")[1]) : -1; //FIXME
    const prod = data.find(item => item.id === productID);

    return (
        <article>
            {prod
                ? <ProductCard product={prod} cardType={'big'} />
                : <h1>Данный товар не найден</h1>
            }
            <hr className='line1'></hr>
            <div className='radio_info_product'>
                <input className='radio__input_product' type='radio' value="cachepot" name='myInfoProduct' id='Anchor1' />
                <label className='radio__label_product' htmlFor='Anchor1'>
                    <div className='img_pot_test' />Кашпо</label>
                <input className='radio__input_product' type='radio' value="info" name='myInfoProduct' id='Anchor2' />
                <label className='radio__label_product' htmlFor='Anchor2'>
                    <div className='img_info_test' />Информация</label>
                <input className='radio__input_product' type='radio' value="care" name='myInfoProduct' id='Anchor3' />
                <label className='radio__label_product' htmlFor='Anchor3'>
                    <div className='img_care_test' />Уход</label>
            </div>
            <hr className='line2'></hr>
            <div className='plant_all_info'>
                <div className='section_accessories'>
                    <div className='h_caspho'>
                        <img width='50' height='50' src='cachepot.svg'></img>
                        <h3>Подходящие кашпо</h3>
                    </div>
                    <div className='cont_accessories'>
                        {prod && <Accessories size={prod.size} type={prod.type} />}
                    </div>
                </div>
                <div className='section_info'>
                    <div className='h_info'>
                        <img width='50' height='50' src='infoBrown.png'></img>
                        <h3>Информация</h3>
                    </div>
                    <div className='cont_info'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
                    </div>
                </div>
                <div className='section_care'>
                    <div className='h_care'>
                        <img width='50' height='50' src='careBlue.png'></img>
                        <h3>Уход</h3>
                    </div>
                    <div className='cont_care'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis vero hic? Dolore fuga omnis provident porro veritatis nesciunt maxime pariatur. Quis, praesentium qui amet voluptas iste, maiores ea perspiciatis officia dolores ad omnis. Ducimus consequatur, molestiae dicta sapiente adipisci rerum eum temporibus asperiores voluptate beatae mollitia ipsa nisi quibusdam, vitae minima facilis laboriosam quaerat optio. Debitis aut, earum pariatur tenetur ad facere, itaque, vel repellat praesentium ab aspernatur accusantium laudantium necessitatibus impedit nulla dignissimos laborum amet aliquam doloribus laboriosam rem harum consectetur consequatur? Aspernatur sapiente itaque eveniet nisi, quod non deleniti cum natus, optio doloribus molestias consectetur repellendus odit voluptates obcaecati tempora. Natus cupiditate dolore tempora architecto doloribus quia laudantium repellat molestias, id placeat perspiciatis voluptatem soluta eveniet molestiae dicta? Reprehenderit ipsa laudantium sint nobis sed, iusto corporis voluptatum natus quam aspernatur. Facilis non molestiae iusto nemo! Maiores commodi, adipisci ab aperiam laborum nam porro fugiat quibusdam fuga nesciunt.</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
