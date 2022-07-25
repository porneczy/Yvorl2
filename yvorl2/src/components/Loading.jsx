import React from 'react'
import logoImg from "./loloattetszo.png"

function Loading() {
    return (

        <div class="container">
            <div className="loader"></div>
            <img src={logoImg} className="logoImg" alt="" srcset="" />
        </div>

    )
}

export default Loading