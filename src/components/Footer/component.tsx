import React from 'react'
import Logo from '../Logo'

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Logo/>
            <h3 className="copyright">© Plantomy 2022. Все права защищены</h3>
        </footer>
    )
}
