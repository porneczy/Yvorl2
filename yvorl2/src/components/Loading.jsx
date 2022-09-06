import React from 'react'
import logoImg from "./loloattetszo.png"

function Loading() {
    return (

        <div className="container">
            <div className="loader"></div>
            <img srcSet={logoImg} className="logoImg" alt="" />
        </div>

    )
}

export default Loading