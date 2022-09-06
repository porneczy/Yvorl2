import React from 'react'
/* eslint-disable */
function Sidebar({ caption, scroll }) {
    const handleClickCaptionChanger = (num) => {
        caption.current.innerText = num;
    }

    return (
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li>
                        <a
                            id='sideHome'
                            href="#home"
                            onClick={() => handleClickCaptionChanger(0)}
                        >Home</a>
                    </li>
                    <li>
                        <a
                            id='sideCegunkrol'
                            href="#cegunkrol"
                            onClick={() => handleClickCaptionChanger(0.211)}
                        >Cégünkről</a>
                    </li>
                    <li>
                        <a
                            id='sideSzoftverfejlesztes'
                            href="#szoftverfejlesztes"
                            onClick={() => handleClickCaptionChanger(0.316)}
                        >Szoftverfejlesztés</a>
                    </li>
                    <li>
                        <a
                            id='sideWebfejlesztes'
                            href="#webfejlesztes"
                            onClick={() => handleClickCaptionChanger(0.421)}
                        >Weboldal fejlesztés</a>
                    </li>
                    <li>
                        <a
                            id='sideTanacsadas'
                            href="#tanacsadas"
                            onClick={() => handleClickCaptionChanger(0.526)}
                        >Tanácsadás</a>
                    </li>
                    <li>
                        <a
                            id='sideProjektvezetes'
                            href="#projektvezetes"
                            onClick={() => handleClickCaptionChanger(0.632)}
                        >Projektvezetés</a>
                    </li>
                    <li>
                        <a
                            id='sideRendszerintegracio'
                            href="#rendszerintegracio"
                            onClick={() => handleClickCaptionChanger(0.737)}
                        >Rendszerintegráció</a>
                    </li>
                    <li>
                        <a id='sideUzemeltetes'
                            href="#uzemeltetes"
                            onClick={() => handleClickCaptionChanger(0.842)}
                        >Üzemeltetés és támogatás</a>
                    </li>
                    <li>
                        <a
                            id='sideReferenciak'
                            href="#referenciak"
                            onClick={() => handleClickCaptionChanger(0.947)}
                        >Referenciák</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar