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
                            <a href='#home'>HOME</a>
                        </li>

                        <li >
                            <a href='#about'>ABOUT</a>
                        </li>

                        <li>
                            <a href='#skill'>SKILL</a>
                        </li>

                        <li>
                            <a href='#portfolio'>PORTFOLIO</a>
                        </li>

                        <li>
                            <a href='#contact'>CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;