import React, { useState } from 'react';
import {Logo} from './Logos'
import {LearnMoreButton} from './LearnMore'

export const Text = (props) => {

    const [learnMore, setLearnMore ] = useState(false);

    const LearnMore = () => {
        setLearnMore(!learnMore)
    }

    return (
        <div className="Text">
            {!learnMore ? <div><h1>Make<br /> remote work</h1><p>  Get your team in sync, no matter your location.<br /> Streamline processes, 
  create team rituals, and<br /> watch productivity soar.</p></div> : <div><h1>Make<br /> remote work</h1><LearnMoreButton></LearnMoreButton></div> }
            {/* <h1>Make<br /> remote work</h1>
            <p>  Get your team in sync, no matter your location.<br /> Streamline processes, 
  create team rituals, and<br /> watch productivity soar.</p> */}
            <button onClick={LearnMore} style={!learnMore ? {marginBottom:200} : {marginBottom:68}}>{!learnMore ? "Learn more" : "Go back" }</button>
            
             <Logo /> 
        </div>
    )
};

