
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { GetPollResult } from "../../store/reducers/ActionCreators";
import { TProduct } from "../../types";
import './PollResultPage.scss';

export function PollResultPage(): JSX.Element {

    const [prods, setProds] = useState<TProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const chars = JSON.parse(localStorage.getItem('chars') || 'null')

    async function getResult() {
        if (chars) {
            const prods: TProduct[] = await GetPollResult(chars);
            setProds(prods);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getResult();
    }, [])

    const cardsList: JSX.Element[] = prods.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <article>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {chars
                        ?
                        <>
                            {prods.length === 0
                                ?
                                <h1>Подходящего растения нет</h1>
                                :
                                <>
                                    <ProductCard product={prods[0]} cardType="poll" />
                                    <div className="wrapper_card_list_poll">
                                        {cardsList.slice(1)}
                                    </div>
                                </>
                            }
                        </>
                        :
                        <h1>Вы еще не прошли опрос</h1>
                    }
                </>
            }
        </article>
    )
}
