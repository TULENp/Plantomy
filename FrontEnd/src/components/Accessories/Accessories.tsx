import { Products } from '../Products';
import "./style.css"

export function Accessories(): JSX.Element {
    return (
        <aside className='accessories'>
            <Products />
        </aside>
    )
}
