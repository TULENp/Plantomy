import React from 'react'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'
import './Footer.scss'

export function Footer(): JSX.Element {
    return (
        <> 
            <hr></hr>
            <footer>
                <div className='logo_copyright'>
                    <img src="src\Assets\Logo1PNG.png" 
                        className='logo_img1' 
                        alt="logo.jpg" />
                    <h3 className="copyright">© Plantomy 2022. Все права защищены</h3>
                </div>
                <Link to={"/"}>
                    <div className='telegram'>
                        <img src="src\Assets\tgLogo.svg" 
                            className='logo_tg' 
                            alt="tgLogo.svg" />
                        <h3 className="chat_bot">Чат-бот</h3>
                    </div>
                </Link>
            </footer>
        </>
    )
}
