import { useAppSelector } from "../../hooks/redux"
import { TChars } from "../../types";

export function PollResultPage(): JSX.Element {

    const raw: string | null = localStorage.getItem('chars');
    const chars: TChars = raw ? JSON.parse(raw) : null;
    return (
        <article>
            <div>PollResultPage</div>
            <ul>
                {!chars
                    ?
                    <h1>Вы еще не прошли опрос</h1>
                    :
                    <>
                        <li>cost: {chars.cost}</li>
                        <li>fertilization: {chars.fertilization}</li>
                        <li>humidity: {chars.humidity}</li>
                        <li>lighting: {chars.lighting}</li>
                        <li>preferences: {chars.preferences}</li>
                        <li>size: {chars.size}</li>
                        <li>temperature: {chars.temperature}</li>
                        <li>watering: {chars.watering}</li>
                    </>
                }
            </ul>
        </article>
    )
}
