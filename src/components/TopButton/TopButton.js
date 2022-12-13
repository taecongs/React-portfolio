import React from 'react';
import './TopButton.scss';



const TopButton = () => {
    return (
        <div className="scroll__container">
            <a href='#home'>
                <button id="top_btn" type="button" >TOP</button>
            </a>
        </div>

    )
}

export default TopButton;