import "./_competence.scss"
import React from 'react';
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import sass from '../../images/sass.webp'
import reactjs from '../../images/reactjs.png'
import node from '../../images/node.png'
import express from '../../images/express.png'
import mongoDB from '../../images/mongodb.png'


const Competences = () => {
    return (
        <section className="competences" id="competences">
            <h2>Mes compétences</h2>
            <div className="displayer">
                <div className="skillsContainer">
                    <h3>Frontend</h3>
                    <div>
                        <figure>
                            <img src={html} alt="logo de html"/>
                            <figcaption>Html</figcaption>
                        </figure>
                        <figure>
                            <img src={css} alt="logo de css"/>
                            <figcaption>Css</figcaption>
                        </figure>
                        <figure>
                            <img src={js} alt="logo de javascript"/>
                            <figcaption>Javascript</figcaption>
                        </figure>
                        <figure>
                            <img src={sass} alt="logo de sass"/>
                            <figcaption>Sass</figcaption>
                        </figure>
                        <figure>
                            <img src={reactjs} alt="logo de react"/> 
                            <figcaption>React Js</figcaption>
                        </figure>
                        <figure>
                            <img src={reactjs} alt="logo de react"/>
                            <figcaption>React <br/>Native</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="skillsContainer">
                    <h3>Backend</h3>
                    <div>
                        <figure>
                            <img src={node} alt="logo de node js"/>
                            <figcaption>Node Js</figcaption>
                        </figure>
                        <figure>
                            <img src={express} alt="logo de express"/>
                            <figcaption>Express Js</figcaption>
                        </figure>
                        <figure>
                            <img src={mongoDB} alt="logo de mongoDb"/>
                            <figcaption>MongoDb</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competences;