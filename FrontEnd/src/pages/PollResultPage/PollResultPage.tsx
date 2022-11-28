import { useAppSelector } from "../../hooks/redux"
import { TChars } from "../../types";

export function PollResultPage(): JSX.Element {

    const { cost, fertilization, humidity, lighting, preferences, size, temperature, watering } = useAppSelector(state => state.CharsReducer.chars);

    return (
        <article>
            <div>PollResultPage</div>
            <ul>
                <li>cost: {cost}</li>
                <li>fertilization: {fertilization}</li>
                <li>humidity: {humidity}</li>
                <li>lighting: {lighting}</li>
                <li>preferences: {preferences}</li>
                <li>size: {size}</li>
                <li>temperature: {temperature}</li>
                <li>watering: {watering}</li>
            </ul>
        </article>
    )
}
