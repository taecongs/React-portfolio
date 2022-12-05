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

        // let $line = document.querySelectorAll('.header_gnb li');
        // let $line = document.querySelector('.header_gnb li::after');
        // console.log($line);


        let $li = document.querySelectorAll('.header_gnb li');

        let $nav = document.querySelectorAll('.header_gnb li a');

        let $dot = document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span');


        if(destination.anchor === 'firstPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#fff";});
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#fff";});
            $li[0].className = 'header_on0';
            $li[1].classList.remove('header_on1');
            $li[2].classList.remove('header_on2');
            $li[3].classList.remove('header_on3');


        } else if(destination.anchor === 'secondPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000";});
            $li[0].classList.remove('header_on0');
            $li[2].classList.remove('header_on2');
            $li[3].classList.remove('header_on3');

            $li[0].className = 'header_line';
            $li[2].className = 'header_line';
            $li[3].className = 'header_line';

            $li[1].className = 'header_on1';


        } else if(destination.anchor === 'thirdPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
            $li[0].classList.remove('header_on0');
            $li[1].classList.remove('header_on1');
            $li[3].classList.remove('header_on3');

            $li[0].className = 'header_line';
            $li[1].className = 'header_line';
            $li[3].className = 'header_line';

            $li[2].className = 'header_on2';


        } else if(destination.anchor === 'fourPage'){
            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000";});
            $li[0].classList.remove('header_on0');
            $li[1].classList.remove('header_on1');
            $li[2].classList.remove('header_on2');

            $li[0].className = 'header_line';
            $li[1].className = 'header_line';
            $li[2].className = 'header_line';

            $li[3].className = 'header_on3';
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