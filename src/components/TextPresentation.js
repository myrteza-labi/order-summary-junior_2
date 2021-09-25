import React from 'react'; 
import './TextPresentation.css'; 

function TextPresentation(props){
    return(
        <div className="TextPresentation" >
            <h1 className="textPresentationTitle">Order Summary</h1>
            <p className="textPresentationParagraph">
                You can now listen to millions of songs, audiobooks, 
                and podcasts on any device anywhere you like! </p>
        </div>
    )
}

export default TextPresentation; 