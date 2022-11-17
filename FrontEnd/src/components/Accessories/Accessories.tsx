import { Products } from '../Products';
// import "./style.css"

//* Function of this component:
//*
//* Display additional accessories in one line. 
//* Items in line can be scrolled horizontally   
//*
export function Accessories(): JSX.Element {
    return (
        <aside className='accessories'>
            <Products />
        </aside>
    )
}
