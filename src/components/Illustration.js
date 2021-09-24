import React from 'react'; 
import './Illustration.css'; 
import imageIllustration from '../images/illustration-hero.svg'

function Illustration(props){
    return(
        <div className="Illustration">
            <img className="imageIllustration" src={imageIllustration} 
            alt="illustration d'une femme écoutant de la musique"/>
        </div>
    )
}

export default Illustration; 