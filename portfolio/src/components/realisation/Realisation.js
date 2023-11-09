import "./_realisations.scss"
import React, {useState} from 'react';
import reaOnePic from "../../images/reaOne.png"
import reaOne1 from "../../images/reaOne1.png"
import reaOne2 from "../../images/reaOne2.png"
import reaOne3 from "../../images/reaOne3.png"
import reaOne4 from "../../images/reaOne4.png"
import reaOne5 from "../../images/reaOne5.png"
import reaOne6 from "../../images/reaOne6.png"


import reaTwoPic from "../../images/reaTwo.png"
import reaTwo1 from "../../images/reaTwo1.png"
import reaTwo2 from "../../images/reaTwo2.png"
import reaTwo3 from "../../images/reaTwo3.png"
import reaTwo4 from "../../images/reaTwo4.png"
import reaTwo5 from "../../images/reaTwo5.png"


import reaThreePic from "../../images/reaThree.png"
import reaThree1 from "../../images/reaThree1.png"
import reaThree2 from "../../images/reaThree2.png"
import reaThree4 from "../../images/reaThree4.png"
import reaThree5 from "../../images/reaThree5.png"
import reaThree6 from "../../images/reaThree6.png"

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
                            <img src={reaOne1} />
                            <img src={reaOne2} />
                            <img src={reaOne3} />
                            <img src={reaOne4} />
                            <img src={reaOne5} />
                            <img src={reaOne6} />
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
                                <img src={reaTwo1} />
                                <img src={reaTwo2} />
                                <img src={reaTwo3} />
                                <img src={reaTwo4} />
                                <img src={reaTwo5} />
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
                            <img src={reaThree1} />
                            <img src={reaThree2} />
                            <img src={reaThree4} />
                            <img src={reaThree5} />
                            <img src={reaThree6} />
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