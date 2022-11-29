import React, { useState } from 'react'

//* Function of this component:
//*
//* This is the counter of products to add to cart
//*
export function CartProductCounter() {

    const [quanNum, setQuanNum] = useState(1);

    function Increment() {
        if (quanNum < 99) {
            setQuanNum(quanNum + 1);
        }
    }

    function Decrement() {
        if (quanNum > 1) {
            setQuanNum(quanNum - 1);
        }
    }

    return (
        <div className='btn_quan'>
            <span className='minus' onClick={Decrement} >-</span>
            <span className='num'>{quanNum}</span>
            <span className='plus' onClick={Increment}>+</span>
        </div>
    )
}
