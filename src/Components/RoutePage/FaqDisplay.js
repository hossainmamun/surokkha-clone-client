import React, { useState } from 'react';
import '../../StyleSheet/Faq.scss'

const FaqDisplay = ({ currentEle}) => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='mb-5 collapse-sec'>
            <h6 onClick={()=> setClicked(!clicked)}>{currentEle.question}</h6>
            {
                clicked && <p>{currentEle.ans}</p>
            }
        </div>
    );
};

export default FaqDisplay;