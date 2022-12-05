
import { ProductCard } from "../../components/ProductCard";
import { useAppSelector } from "../../components/hooks/redux";
import { TChars, TProduct } from "../../types";
import { PlantsChars } from "../../zDataExamples/PlantsChars";
import './PollResultPage.scss';
export function PollResultPage(): JSX.Element {

    const raw: string | null = localStorage.getItem('chars');
    const chars: TChars = raw ? JSON.parse(raw) : null;
    //! Available only after MainPage loaded
    const { products } = useAppSelector(state => state.ProductReducer);

    // find ids of plants with suitable characteristics
    const prodChars = PlantsChars.filter(item =>
        item.cost === chars.cost &&
        item.fertilization === chars.fertilization &&
        item.humidity === chars.humidity &&
        item.lighting === chars.lighting &&
        item.preferences === chars.preferences &&
        item.size === chars.size &&
        item.temperature === chars.temperature &&
        item.watering === chars.watering
    ).map(x => x.id).slice(0, 10);


    let prods: TProduct[] = [];
    //find plants by ids
    if (prodChars.length !== 0) {
        for (let i = 0; i < prodChars.length; i++) {
            prods.push(products.find(item => item.id === prodChars[i])!);
        }
    }

    const cardsList: JSX.Element[] = prods.map((prod: TProduct) => {
        return (
            <ProductCard product={prod} cardType={'mini'} />
        )
    })

    return (
        <article>
            {!chars
                ?
                <h1>Вы еще не прошли опрос</h1>
                :
                <>
                    {prodChars.length !== 0
                        ?
                        <>
                            <ProductCard product={prods[0]} cardType="poll" />
                            <div className="wrapper_card_list_poll">
                                {cardsList.slice(1)}
                            </div>
                        </>
                        :
                        <h1>Подходящего растения нет</h1>
                    }
                </>
            }
        </article>
    )
}
