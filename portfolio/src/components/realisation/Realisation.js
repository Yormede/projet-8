import "./_realisations.scss"
import React, {useState} from 'react';
import reaOnePic from "../../images/reaOne.png"
import reaTwoPic from "../../images/reaTwo.png"
import reaThreePic from "../../images/reaThree.png"

const Realisation = () => {
    const [reaOne, setOne] = useState(false);
    const [reaTwo, setTwo] = useState(false);
    const [reaThree, setThree] = useState(false);


    return (
        <section className="realisations" id="realisations">
            <h2>Mes réalisations</h2>
            <div className="realisationsListe">
                <figure onClick={()=>(setOne(true))}>
                    <img src={reaOnePic}/>
                </figure>
                <figure onClick={()=>(setTwo(true))}>
                    <img src={reaTwoPic}/>
                </figure>
                <figure onClick={()=>(setThree(true))} >
                    <img src={reaThreePic}/>
                </figure>

                {reaOne === true ? <div className="modaleRea">
                    <div className="content">
                        <h3>Kasa - Front</h3>
                        <p>Durant ma formation, j'ai du réalisé le coté Frontend d'une application de location immobilière. J'avais accès à tous le design Figma et ai codé le site en React Js</p>
                        <a target="_blank" href="https://github.com/Yormede/Projet-6-OpenClassroom">https://github.com/Yormede/Projet-6-OpenClassroom</a>
                        <div className="imageList">

                        </div>
                        <i className="fa-solid fa-chevron-right" onClick={()=>{
                            setTwo(true);
                            setOne(false)}}></i>    
                        <i className="fa-solid fa-chevron-left" onClick={()=>{
                            setThree(true);
                            setOne(false)}}></i>     
                        <i className="fa-solid fa-x" onClick={()=>(setOne(false))}></i>
                    </div>
                    <div className="overlay" onClick={()=>(setOne(false))}></div>
                </div> : null}
                {reaTwo === true ? <div className="modaleRea">
                        <div className="content">
                            <h3>Mon Vieux Grimoire</h3>
                            <p>Durant ma formation, j'ai du réalisé tout le Backend d'un site de notation de livre nommée "Mon Vieux Grimoire". J'avais comme support tous les noms de routes préparer par le chef de projet et les fonctionnalités nécéssaires détaillés. J'ai codé le site à l'aide de NodeJs, ExpressJs et MongoDb Atlas</p>
                            <a target="_blank" href="https://github.com/Yormede/Projet-7">https://github.com/Yormede/Projet-7</a>
                            <div className="imageList">

                            </div>
                            <i className="fa-solid fa-chevron-right" onClick={()=>{
                                setThree(true);
                                setTwo(false)}}></i>    
                            <i className="fa-solid fa-chevron-left" onClick={()=>{
                                setOne(true);
                                setTwo(false)}}></i>     
                            <i className="fa-solid fa-x" onClick={()=>(setTwo(false))}></i>
                        </div>
                    <div className="overlay" onClick={()=>(setTwo(false))}></div>
                </div> : null}
                {reaThree === true ? <div className="modaleRea">
                    <div className="content">
                        <h3>Quad Yt Buggy</h3>
                        <p>J'ai réalisé à la demande d'un client, le design complet d'un site vitrine pour un service de location de quad et autre véhicule dans le désert de Marrakech au Maroc. J'ai codé le site en React Js et utilisé Figma pour la création du design.</p>
                        <a target="_blank" href="https://quad-yt-buggy.com/">Quad Yt Buggy</a>
                        <div className="imageList">

                        </div>
                        <i className="fa-solid fa-chevron-right" onClick={()=>{
                            setOne(true);
                            setThree(false)}}></i>    
                        <i className="fa-solid fa-chevron-left" onClick={()=>{
                            setTwo(true);
                            setThree(false)}}></i>     
                        <i className="fa-solid fa-x" onClick={()=>(setThree(false))}></i>
                    </div>
                    <div className="overlay" onClick={()=>(setThree(false))}></div>
                </div> : null}
            </div>
        </section>
    );
};

export default Realisation;