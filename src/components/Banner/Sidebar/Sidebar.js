import { useState } from 'react';

import './Sidebar.scss';


const Sidebar = () => {
    const $root = document.getElementById('root');
    // console.log($root);

    const [isNav, setIsNav] = useState(true);

    const hambugerBtn = () => {
        setIsNav(isNav => !isNav);

        if ( isNav ){
            $root.classList.add('open');
            $root.classList.remove('close');
        } else{
            $root.classList.remove('open');
            $root.classList.add('close');
        }
    }

    return (
        <aside>
            {/* 사이드바 정의 */}
            <div className="left_nav" style={{ opacity: '1' }}>
                {/* <span className="ir_su">왼쪽 네비게이션 부분</span> */}
                <nav>
                    <h2 className="nav_logo">
                        B {/* <sup>©</sup> */}
                    </h2>
                    <div className="nav_text">
                        <p>010-8127-9927</p>
                    </div>
                </nav>
            </div>

            {/* 햄버거 메뉴 */}
            <div className="icon_wrap" style={{ opacity: '1' }}>
                <div className={isNav ? 'icon' : 'icon iconAnimation'} onClick={hambugerBtn}></div>
            </div>

            <div className='overlay'>
                <ul className="menu">
                    <li>
                        <a href='#home'>Home</a><br/>
                        <a href='#about'>About</a><br/>
                        <a href='#skill'>Skill</a><br/>
                        <a href='#portfolio'>Portfolio</a><br/>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>

            <nav className="m_navi">
                <h2 className="m_nav-logo">
                    B
                </h2>
            </nav>
        </aside>
    );
}

export default Sidebar;