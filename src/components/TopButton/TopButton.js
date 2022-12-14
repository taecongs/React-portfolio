import React, { useState } from 'react';
import './TopButton.scss';

import github from './img/git_icon_w.png';
import notion from './img/notion_icon_w.png';
import plus from './img/plus_w2.png';



const TopButton = () => {
    const [isBall, setIsBall] = useState(false);

    const ballClick = () => {
        setIsBall(isBall => !isBall);
    }

    return (
        <div className="scroll__container">
            {/* <a href='#home'>
                <button id="top_btn" type="button" >TOP</button>
            </a> */}

            <div className={isBall ? 'ball active' : 'ball'} onClick={ballClick}>
                {/* <a href="#home">
                    <span className="first">
                        TOP
                    </span>
                </a> */}

                <a href='https://abundant-cyclamen-76a.notion.site/Portfolio-01b71b9d5b0e48b9b0ae85d3ce8366b9' target='_blank' rel='noopener noreferrer'>
                    <span className="second">
                        <b className='nn_t'>Notion</b> <img src={notion} alt='노션 바로가기' />
                    </span>
                </a>


                <a href='https://github.com/taecongs' target='_blank' rel='noopener noreferrer'>
                    <span className="third">
                        <img src={github} alt='깃헙 바로가기' /> <b className='gg_t'>Github</b>
                    </span>
                </a>

                <img className='plus_top' src={plus} alt='' />
            </div>
        </div>

    )
}

export default TopButton;