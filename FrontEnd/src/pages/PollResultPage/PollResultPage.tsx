
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { useAppSelector } from "../../hooks/redux";
import { TProduct } from "../../types";
import './PollResultPage.scss';

export function PollResultPage(): JSX.Element {

    const { pollResult, isCompleted, isLoading, error } = useAppSelector(state => state.PollResultReducer);

    const cardsList: JSX.Element[] = pollResult.map((prod: TProduct) => {
        return (
            <ProductCard key={prod.id} product={prod} cardType={'mini'} />
        )
    })

    return (
        <article>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {!isCompleted
                                ?
                                <h1>Вы еще не прошли <Link to={'/poll'}><b>опрос</b></Link></h1>
                                :
                                <>
                                    {pollResult.length === 0
                                        ?
                                        <h1>Подходящего растения нет</h1>
                                        :
                                        <>
                                            <ProductCard product={pollResult[0]} cardType="poll" />
                                            <div className="wrapper_card_list_poll">
                                                {cardsList.slice(1)}
                                            </div>
                                        </>
                                    }
                                </>
                            }
                        </>
                    }
                </>
            }
        </article>
    )
}
