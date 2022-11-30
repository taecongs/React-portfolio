import { useState } from 'react';
import {Link} from 'react-router-dom';

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
                <div className={isNav ? 'icon' : 'icon iconAnimation'} onClick={hambugerBtn}></div>
            </div>

            <div className='overlay'>
                <ul className="menu">
                    <li>
                        {/* <Link to='/'>Portfolio</Link> */}
                        <h2>About</h2>
                        <h2>Skill</h2>
                        <h2>Portfolio</h2>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;