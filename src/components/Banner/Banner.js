import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';


import './Banner.scss';


const Banner = () => {
    return (
        <div className='banner'>
            <div id="cover" className="cover_left"></div>

            <Sidebar />

            <section className='intro_sec'>

            </section>

            <section style={{ background: 'lightgreen', width: '100%', height: '100vh', fontSize : '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2>About</h2>
            </section>

            <section style={{ background: 'lightblue', width: '100%', height: '100vh', fontSize : '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Skill</h2>
            </section>

            <section style={{ background: 'lightyellow', width: '100%', height: '100vh', fontSize : '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Portfolio</h2>
            </section>
        </div>
    );
}

export default Banner;