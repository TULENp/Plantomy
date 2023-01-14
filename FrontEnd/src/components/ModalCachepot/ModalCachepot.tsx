// import { JSXElementConstructor } from "react";
import { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { TProduct, TProductsType, TSize } from '../../types';
import { ProductCard } from '../ProductCard';
import './ModalCachepot.scss';

export function ModalCachepot({isModalCachepotActive, setIsModalCachepotActive, type, size}: 
    {isModalCachepotActive: boolean,
     setIsModalCachepotActive: Dispatch<SetStateAction<boolean>>,
     type:TProductsType,
     size:TSize
    }):JSX.Element{


    const { products, isLoading, error } = useAppSelector(state => state.ProductReducer);
    let productData = products.filter(function (prod) {
        if (type === 'cachepot') {
            return prod.type === "plant" && prod.size === size;
        } else {
            return prod.type === "cachepot" && prod.size === size;
        }
    });

    const cardsList: JSX.Element[] = productData.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })
    
    return(
        <>
            <div className={isModalCachepotActive ? "cont_modal_cachepot active" : "cont_modal_cachepot"}>
                <div className="modal_cachepot_inner">
                    {/* <h1>Подходящее кашпо</h1> */}
                    {cardsList}
                </div>
            </div>
        </>
    )
}