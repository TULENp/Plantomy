import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to={"/"}>
            <div className="logo">
                <img src="" alt="logo.jpg" />
                <h1>PLANTOMY</h1>
            </div>
        </Link>
    )
}
