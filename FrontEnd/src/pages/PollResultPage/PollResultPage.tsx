
import { ProductCard } from "../../components/ProductCard";
import { useAppSelector } from "../../hooks/redux";
import { TChars, TProduct } from "../../types";
import { PlantsChars } from "../../zDataExamples/PlantsChars";
import './PollResultPage.scss';
export function PollResultPage(): JSX.Element {

    const raw: string | null = localStorage.getItem('chars');
    const chars: TChars | null = raw ? JSON.parse(raw) : null;

    const { products } = useAppSelector(state => state.ProductReducer);

    // find ids of plants with suitable characteristics
    let prodIDs: number[] = [];
    if (chars) {
        prodIDs = PlantsChars.filter(item =>
            (chars?.cost === 0 || item.cost === chars?.cost) &&
            item.fertilization === chars?.fertilization &&
            (chars?.humidity === 0 || item.humidity === chars?.humidity) &&
            item.lighting === chars?.lighting &&
            (chars?.preferences === 0 || item.preferences === chars?.preferences) &&
            item.size === chars?.size &&
            (chars?.temperature === 4 || item.temperature === chars?.temperature) &&
            item.watering === chars?.watering
        ).map(x => x.id).slice(0, 10);
    }

    //find plants by ids
    let prods: TProduct[] = [];
    if (prodIDs.length !== 0 && products.length !== 0) {
        for (let i = 0; i < prodIDs.length; i++) {
            prods.push(products.find(item => item.id === prodIDs[i])!);
        }
    }

    const cardsList: JSX.Element[] = prods.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <article>
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
        </article>
    )
}
