import './Footer.scss'

export function Footer(): JSX.Element {
    return (
        <>
            <hr className='line_footer'></hr>
            <footer>
                <div className='logo_copyright'>
                    <img src="Logo1PNG.png"
                        className='logo_img1'
                        alt="logo.jpg" />
                    <h3 className="copyright">© Plantomy 2022. Все права защищены</h3>
                </div>
                <a href='https://t.me/PlantomyBot' target='_blank'>
                    <div className='telegram'>
                        <img src="tgLogo.svg"
                            className='logo_tg'
                            alt="tgLogo.svg" />
                        <h3 className="chat_bot">Чат-бот</h3>
                    </div>
                </a>
            </footer>
        </>
    )
}
