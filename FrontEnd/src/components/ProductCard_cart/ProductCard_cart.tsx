import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TCard } from '../../types'
import { Button } from 'antd'
import './ProductCard_cart.scss'

//* Function of this component:
//*
//* Display product info. Shopping cart version
//*
//TODO add normal classNames or ids
export function ProductCard_cart({id, image, title, price }:TCard): JSX.Element {
    const [quanNum, setQuanNum] = useState(1);

    function Increment () {
        if(quanNum < 99) {
            setQuanNum(quanNum + 1);
        }
    }

    function Decrement () {
        if(quanNum > 1) {
            setQuanNum(quanNum - 1);
        }
    }

    return (
        <>
            <section className='productCard_cart'>
                <Link to={`/product:${id}`}>
                     <img className='img_product_cart' src={image} alt={title} />
                </Link>
                <div className="info">
                    <h2 className='title_product'>{title}</h2>
                     <div className="action">
                        <h3 className='price_cart'>{price} ₽</h3>
                        <div className='btn_quan'>
                            <span className='minus' onClick={Decrement} >-</span>
                            <span className='num'>{quanNum}</span>
                            <span className='plus' onClick={Increment}>+</span>
                        </div>
                        <img className='img_trashCan' src="TrashCan.svg" alt="trashCan" />
                    </div>
                    <Button className='btn_add_caspho'>+ Добавить кашпо</Button>
                </div>
            </section>
        </>
    )
}
