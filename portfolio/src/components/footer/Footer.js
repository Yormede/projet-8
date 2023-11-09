import React from 'react';
import './_footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='footerContainer'>
                <p className='socialNetwork'>
                <a href='https://github.com/Yormede' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/ahmed-khedimellah-aa87991a0/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                </p>
                <p className='copyright'>Réalisé par Ahmed KHEDIMELLAH</p>
                <a href='../../images/Cv Ahmed v2.pdf' target="_blank" className='download' rel="noreferrer">Télécharger mon Cv</a>
            </div>
        </footer>
    );
};

export default Footer;