import React from 'react'; 
import './OrderSummary.css'; 
import Illustration from './Illustration'; 
import TextPresentation from './TextPresentation'; 
import PlanBox from './PlanBox'; 
import PaymentBtn from './PaymentBtn'; 
import CancelBtn from './CancelBtn'; 



function OrderSummary(props){
    return(
        <div className="OrderSummary">
            <Illustration/>
            <div className="mainContainer" >
                <TextPresentation/>
                <PlanBox/>
                <PaymentBtn/>
                <CancelBtn/>
            </div>
            
        </div>
    )
}

export default OrderSummary; 