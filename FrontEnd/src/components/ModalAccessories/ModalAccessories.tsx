// import { JSXElementConstructor } from "react";
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { TProduct, TProductsType, TSize } from '../../types';
import { ProductCard } from '../ProductCard';
import './ModalAccessories.scss';

export function ModalAccessories({isModalAccessoriesActive, setIsModalAccessoriesActive, type, size}: 
    {isModalAccessoriesActive: boolean,
     setIsModalAccessoriesActive: Dispatch<SetStateAction<boolean>>,
     type:TProductsType,
     size:TSize
    }):JSX.Element{


    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    // let productData = products.filter(function (prod) {
    //     if (type === 'cachepot') {
    //         return prod.type === "plant" && prod.size === size;
    //     } else {
    //         return prod.type === "cachepot" && prod.size === size;
    //     }
    // });
    let productData = products.filter(function (prod) {
            // return prod.type === "plant" && prod.size === size;
            return prod.type === "plant";

    });
    // console.log(productData);
    const cardsList: JSX.Element[] = productData.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })
    

    return(
        <>
            <div className={isModalAccessoriesActive ? "cont_modal_accessories active" : "cont_modal_accessories"} onClick={ ()=> {setIsModalAccessoriesActive(false)} }>
                <div className="modal_accessories_inner" onClick={e => e.stopPropagation()}>
                    <div className='modal_accessories_header'>
                        <h1>Подходящее кашпо</h1>
                        <img src='/exit.svg' width={28} onClick={()=> {setIsModalAccessoriesActive(!isModalAccessoriesActive)}}/>
                    </div>
                    <div className='accessories_cards'>
                        {cardsList}
                    </div>    
                </div>
            </div>
        </>
    )
}