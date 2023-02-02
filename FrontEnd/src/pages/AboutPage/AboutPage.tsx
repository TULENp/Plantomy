import './AboutPage.scss'

export function AboutPage(): JSX.Element {
    
    return (
        <div className='container_about_page'>
            <div className='left_content'>
                <img className='img_flower_upper' src='/FlowerAbout.png' alt='FlowerAbout.png' />
                <div className="h_content">
                    <h1>01. О нас</h1>
                    <h2>Plantomy  - интернет-магазин домашних растений, на котором вы сможете подобрать растение для себя.</h2>
                </div>
                <div className="h_content">
                    <h1>02. Цель</h1>
                    <h2>Создать платформу, которая помогает облагородить ваш дом красивыми растениями.</h2>
                </div>
                <div className="h_content">
                    <h1 className='h1_03'>03. Разработчики</h1>
                    <img src='/git_icn.png' className='git_icn' alt='git_icn' />
                    <a href='https://github.com/Arkadashim' target='_blank'><h2>Галёв Андрей</h2></a>
                    <a href='https://github.com/TULENp' target='_blank'><h2>Кононенко Евгений</h2></a>
                    <a href='https://github.com/kildanL' target='_blank'><h2>Кутлеев Расим</h2></a>
                </div>
            </div>
            <div className='right_content'>
                <img className='img_content_header' src='/img_content_header.png' alt='img_content_header.png' />
                <img className='img_content_bottom' src='/img_bottom_about_page.png' alt='img_bottom.png' />
            </div>
        </div>
    )
}
