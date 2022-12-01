import React from 'react'
import './AboutPage.scss'

export function AboutPage(): JSX.Element {
    return (
        <div className='container_about_page'>
            <div className='left_content'>
                <img className='img_flower_upper' src='src\Assets\FlowerAbout.png' alt='FlowerAbout.png'/>
                <div className="h_content">
                    <h1>01. О нас</h1>
                    <h2>Plantomy  - интернет-магазин домашних растений, на котором вы сможете подобрать растение для себя.</h2>
                </div>
                <div className="h_content">
                    <h1>02. Цель</h1>
                    <h2>Создать платформу, которая помогает облагородить ваш дом красивыми растениями.</h2>
                </div>
            </div>
            <div className='right_content'>
                <img className='img_content_header' src='src\Assets\img_content_header.png' alt='img_content_header.png'/>
            </div>
        </div>
    )
}
