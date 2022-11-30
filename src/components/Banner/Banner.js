import React from 'react';

import Sidebar from '../Sidebar/Sidebar';


import './Banner.scss';


const Banner = () => {
    return (
        <div className='banner'>
            <div id="cover" className="cover_left"></div>

            <Sidebar />

            <section className='intro_sec'>

            </section>
        </div>
    );
}

export default Banner;