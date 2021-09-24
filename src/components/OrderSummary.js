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
            <TextPresentation/>
            <PlanBox/>
            <PaymentBtn/>
            <CancelBtn/>
        </div>
    )
}

export default OrderSummary; 