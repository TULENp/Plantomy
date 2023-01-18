// import { JSXElementConstructor } from "react";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GetAccessories } from '../../store/reducers/ActionCreators';
import { TProduct } from '../../types';
import { LazyLoading } from '../LazyLoading';
import { ProductCard } from '../ProductCard';
import './ModalAccessories.scss';

export function ModalAccessories({ isModalAccessoriesActive, setIsModalAccessoriesActive, productId }:
    {
        isModalAccessoriesActive: boolean,
        setIsModalAccessoriesActive: Dispatch<SetStateAction<boolean>>,
        productId: number
    }): JSX.Element {

    const [accessories, setAccessories] = useState<TProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAccessories() {
        const prods = await GetAccessories(productId);
        if (prods instanceof Array) {
            setAccessories(prods);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getAccessories();
        setIsLoading(true);
    }, [productId])

    const cardsList: JSX.Element[] = accessories.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <>
            <div className={isModalAccessoriesActive ? "cont_modal_accessories active" : "cont_modal_accessories"} onClick={() => { setIsModalAccessoriesActive(false) }}>
                <div className="modal_accessories_inner" onClick={e => e.stopPropagation()}>
                    <div className='modal_accessories_header'>
                        <h1>Подходящее кашпо</h1>
                        <img src='/exit.svg' width={28} onClick={() => { setIsModalAccessoriesActive(!isModalAccessoriesActive) }} />
                    </div>
                    <div className='accessories_cards'>
                        {isLoading
                            ?
                            <LazyLoading type='spin'/>
                            :
                            <>
                                {accessories.length !== 0
                                    ?
                                    <>
                                        {cardsList}
                                    </>
                                    :
                                    <h1>Нет подходящих товаров</h1>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}