import React from 'react';

import './Header.scss';


const Header = () => {
    return (
        <header>
            <div className='header_inner'>
                <h1 className='header_logo'>
                    Front-end Developer
                </h1>

                <nav className='header_nav'>
                    <ul className='header_gnb'>
                        <li className='header_on'>
                            <a href='#firstPage'>HOME</a>
                        </li>

                        <li >
                            <a href='#secondPage'>ABOUT</a>
                        </li>

                        <li>
                            <a href='#thirdPage'>SKILL</a>
                        </li>

                        <li>
                            <a href='#fourPage'>PORTFOLIO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;