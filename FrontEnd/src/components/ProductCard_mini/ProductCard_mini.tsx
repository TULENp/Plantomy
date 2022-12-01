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
        <div className='ProductCard_mini'>
            <Link to={`/product:${id}`}>
                <section className='info'>
                    <img className='img_productCard_mini' src={image} alt="Img" />
                    <h3 className='line-limit-length'>{title}</h3>
                    <h3 className='price'>{price} ₽</h3>
                </section>
            </Link>
            <div className='action'>
                { quantityActive 
                    ?
                        <div className='btn_quantity'>
                            <span className='minus' onClick={Decrement}>-</span>
                            <span className='num'>{quantityNum}</span>
                            <span className='plus' onClick={Increment} >+</span>
                        </div>
                    :
                        <Button type='primary' className='btn_in_cart' onClick={()=> {setQuantityActive(true)}}>В корзину</Button>
                    }
                
                <img src="EmptyHeart.svg" alt="favorite" />
            </div>
        </div>
    )
}
