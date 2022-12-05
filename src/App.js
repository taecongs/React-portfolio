import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


import Sidebar from './components/Banner/Sidebar/Sidebar';
import Header from './components/Banner/Header/Header';

import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Portfolio from './components/Portfolio/Portfolio';

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const App = () => {
    const onLeave = (origin, destination, direction) => {
        // console.log("onLeave", { origin, destination, direction });
        // console.log('99999', destination.anchor);

        let $line = document.querySelector('.header_gnb li::after');
        console.log('***********************************', $line);

        let $nav = document.querySelectorAll('.header_gnb li a');

        let $dot = document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span');


        if(destination.anchor === 'firstPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#fff";});
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#fff";});
            // $line.forEach(($nav_a) => {$nav_a.style.background = '#fff'});
        } else if(destination.anchor === 'secondPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000";});
            // $line.forEach(($nav_a) => {$nav_a.style.background = '#000'});
        } else if(destination.anchor === 'thirdPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
        } else if(destination.anchor === 'fourPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
        }
    }
    return (

        <div>
            <div id="cover" className="cover_left"></div>
            <Sidebar />
            <Header />

            <ReactFullpage
            debug
            // licenseKey={"YOUR_KEY_HERE"}
            navigation
            anchors={["firstPage", "secondPage", "thirdPage", "fourPage"]}
            sectionSelector={SECTION_SEL}
            onLeave={onLeave}
            // sectionsColor="blue"
            render={(comp) => (
                <ReactFullpage.Wrapper>
                    <Banner />
                    <About />
                    <Skill />
                    <Portfolio />
                </ReactFullpage.Wrapper>
            )}
        />
        </div>

    );
}

export default App;