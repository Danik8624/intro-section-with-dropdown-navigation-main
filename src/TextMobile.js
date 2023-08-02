import React, { useState } from 'react';
import {Logo} from './Logos'
import {LearnMoreButtonMobile} from './LearnMoreButtonMobile'

export const TextMobile = () => {

    const [learnMore, setLearnMore ] = useState(false);

    const LearnMore = () => {
        setLearnMore(!learnMore)
    }

    return (
        <div className="TextMobile">
            {!learnMore ? <div><h1>Make remote work</h1><p>  Get your team in sync, no matter your location.<br /> Streamline processes, 
  create team rituals, and<br /> watch productivity soar.</p></div> : <div><h1>Make remote work</h1><LearnMoreButtonMobile></LearnMoreButtonMobile></div> }
            <button onClick={LearnMore}>{!learnMore ? "Learn more" : "Go back" }</button>
             <Logo /> 
        </div>
    )
};
