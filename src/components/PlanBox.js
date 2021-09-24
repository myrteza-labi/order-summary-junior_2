import React from 'react'; 
import './PlanBox.css'; 
import planBoxIcon from '../images/icon-music.svg'; 

function PlanBox(props){
    return(
        <div className="PlanBox" >
            <img className="planBoxIcon" src={planBoxIcon} alt="note musicale" />
            <div className="planBoxDescription">
                <h4 className="planBoxTitle" >Annual Plan</h4>
                <p className="planBoxPrice" >$59.99/year</p>
            </div>
            <a href="#test" className="planBoxChangeLink">Change</a>

        </div>
    )
}

export default PlanBox; 