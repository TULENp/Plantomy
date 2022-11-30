import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '../../types'
import { Button } from 'antd'
import './ProductCard_mini.scss'

//* Function of this component:
//*
//* Display product info. List version
//*
//TODO add normal classNames or ids
export function ProductCard_mini({ id, image, title, price }:TProduct): JSX.Element {
    const [quanActive,setQuanActive] = useState(false);
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
        else{
            setQuanActive(false);
        }
    }

    return (
        <div className='ProductCard_mini'>
            <Link to={`/product:${id}`}>
                <section className='info'>
                    <img className='img_productCard_mini' src={image} alt="Img" />
                    <h3 className='line-limit-length'>{title}</h3>
                    <h3 className='price'>{price} ₽</h3>
                </section>
            </Link>
            <div className='action'>
                { quanActive 
                    ?
                        <div className='btn_quan'>
                            <span className='minus' onClick={Decrement}>-</span>
                            <span className='num'>{quanNum}</span>
                            <span className='plus' onClick={Increment} >+</span>
                        </div>
                    :
                        <Button type='primary' className='btn_in_cart' onClick={()=> {setQuanActive(true)}}>В корзину</Button>
                    }
                
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </div>
    )
}
