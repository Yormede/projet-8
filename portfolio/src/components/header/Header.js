import React from 'react';
import './_header.scss'
import svg from '../../images/header2.svg'
import wave from '../../images/background.svg'
 
const Header = () => {
    return (
        <header id="top">
            <div className='headerContainer'>
            <div className='desktop'>
                <nav>
                    <a href="#top" className='home'>Acceuil</a>
                    <div>
                        {/* <ul>
                            <li><a href='#'>Mon Parcours</a></li>
                            <li><a href='#'>Mes compétences</a></li>
                            <li><a href='#'>Mes réalisations</a></li>
                        </ul> */}
                        <a href='#parcours'>Mon Parcours</a>
                        <a href='#competences'>Mes compétences</a>
                        <a href='#realisations'>Mes réalisations</a>
                    </div>
                </nav>
            </div>
            <div className='mobile'>
                <nav>
                    <a href="#top"><i className="fa-solid fa-house"></i></a>
                    <i className="fa-solid fa-bars" onClick={console.log("onclick")}></i>
                </nav>
            </div>

                <section className='topSection'>
                <h1>Bonjour, <br/>
                    Je suis Ahmed KHEDIMELLAH, <br/> 
                    un <span>Developpeur Fullstack</span>.
                </h1>
                <img src={svg} alt='image de js html et css'/>
            </section>
            </div>
        <img src={wave} alt='séparateur' className='background'/>
        </header>
    );
};

export default Header;