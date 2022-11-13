import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.scss'

export function Logo(): JSX.Element {
    return (
        <Link to={"/"}>
            <div className="logo">
                <img src="src\Assets\Logo1PNG.png" className='logo_img' alt="logo.jpg" />
            </div>
        </Link>
    )
}