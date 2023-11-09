import "./_parcours.scss"
import React from 'react';
import parcours from '../../images/Parcours.svg'
import parcoursMobile from '../../images/ParcoursMobile.svg'

const Parcours = (props) => {
    return (
        <section className="parcours" id="parcours">
            <h2>Mon Parcours</h2>
            <img src={props.data === true ? parcoursMobile : parcours }/>
        </section>
    );
};

export default Parcours;