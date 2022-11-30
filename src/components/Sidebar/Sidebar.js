import react, { useState } from 'react';

import './Sidebar.scss';


const Sidebar = (props) => {

    return (
        <div>
            {/* 사이드바 정의 */}
            <div className="left_nav" style={{ opacity: '1' }}>
                {/* <span className="ir_su">왼쪽 네비게이션 부분</span> */}
                <nav>
                    <h2 className="nav_logo">
                        B {/* <sup>©</sup> */}
                    </h2>
                    <div className="nav_text">
                        <p>Portfolio</p>
                    </div>
                </nav>
            </div>

            {/* 햄버거 메뉴 */}
            <div className="icon_wrap" style={{ opacity: '1' }}>
                <div className='icon'></div>
            </div>

            <div className='overlay'>
                <ul className="menu">

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;