import React from 'react'
import { TNews } from '../../types'
// import './style.css'

//* Function of this component:
//*
//* This is a news item
//* click on item takes to page indicated in the link
//*
export function NewsItem({ link, image }: TNews): JSX.Element {
    return (
        <section className='news'>
            <a href={link}  >
                <img width={1241} height={328} src={image} alt="news" />
            </a>
        </section>
    )
}
