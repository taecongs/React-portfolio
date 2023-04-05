
import './Portfolio.scss';
import './slick-theme.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import $mokup_1 from './img/mockup_01.png';
import $mokup_2 from './img/mockup_02.png';
import $mokup_3 from './img/mockup_03.png';
import $mokup_4 from './img/mockup_04.png';
import $mokup_5 from './img/mockup_05.png';
import $mokup_6 from './img/mockup_06.png';
import $mokup_7 from './img/mockup_07.png';


const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // 페이지 스크롤 애니메이션 정의
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const options2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const options3 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_slider_l');
            } else {
                entry.target.classList.remove('active_slider_l');
            }
        });
    }, options);

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_slider_r');
            } else {
                entry.target.classList.remove('active_slider_r');
            }
        });
    }, options2);

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('dot_animation');
            } else {
                entry.target.classList.remove('dot_animation');
            }
        });
    }, options3);

    const slider_l = document.querySelectorAll('.slider_left');
    const slider_r = document.querySelectorAll('.slider_right');
    const slider_dot = document.querySelectorAll('.slick-dots');

    slider_l.forEach(el => observer.observe(el));
    slider_r.forEach(el => observer2.observe(el));
    slider_dot.forEach(el => observer3.observe(el));


    return (
        <section className='custom-section portfolio_container'>
            <div className='bg_box'>

                <div className='portfolioContant_inner'>

                    <Slider {...settings} className='s_s'>
                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>01 - 팀 프로젝트</p>

                                <h1 className='slider_title'>내일 뭐하지?</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_2'>JAVAScript</p>
                                    <p className='tec_3'>React</p>
                                    <p className='tec_4'>Node.js</p>
                                    <p className='tec_5'>Sass</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        메인 페이지, 이벤트 상세 조회 페이지, 별점&댓글 기능 페이지, 마이 페이지(즐겨 찾기,댓글 관리), 채팅 페이지 레이아웃 구상 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    코로나 완화로 정상적인 일상으로 돌아오며 축제나, 전시회 등을 찾는 사람들이 증가하고 있지만 일정을 한번에 모아서 보기는 쉽지 않습니다.
                                    이러한 부분을 고려하여 서울 전 지역에서 진행되고 있는 전시회 및 축제 등의 이벤트 일정을 제공하는 서비스입니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/a3bb0a772b0a4494b5cfc9db603ac806' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/tmr-mohaji/mohaji' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_1} alt='mokup1' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>02 - 개인 프로젝트</p>

                                <h1 className='slider_title'>유튜브 클론 코딩</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_2'>JAVAScript</p>
                                    <p className='tec_3'>React</p>
                                    <p className='tec_5'>Sass</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        React, Sass를 활용하여 컴포넌트를 분리 후 레이아웃 작업, 유튜브 API를 활용하여 데이터 연결후 메인 화면에 인기 있는 한국 지역 영상 리스트 제공 할 수 있도록 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    React, Sass를 이용하여 현재 서비스 중인 유튜브의 클론 코딩 작업물이며, 제공 된 동영상 썸네일을 클릭하면 동영상을 볼 수 있는
                                    컴포넌트로 연결되어 영상 시청이 가능하고 구독자수,조회수, 등록시간, 좋아요, 싫어요 등 실시간으로 데이터 확인이 가능합니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://27.96.130.163:8081/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/3a799ac82ebd45fdaa193cce175ad719' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/youtube_clone' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_2} alt='mokup1' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>03 - 개인 프로젝트</p>

                                <h1 className='slider_title'>개인 채팅 페이지</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JAVAScript</p>
                                    <p className='tec_4'>Node.js</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        웹 소켓 프로토콜을 지원하는 실시간 웹 애플리케이션(채팅, 메세지, 등)을 위한 JavaScript 라이브러리를 이용하여 웹 클라이언트와 서버간에 실시간 양방향 통신이 가능하도록 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    전체적인 레이아웃 구상 및 학습한 웹 소켓(Socket)을 사용하여 비동기 이벤트 방식으로 클라이언트 간의 실시간 양방향 통신 가능하며,
                                    채팅방 입장 기능과 간단한 메시지 송·수신 기능 및 현재 대화에 참여하고 있는 구성원들을 확인 할 수 있습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://27.96.130.163:8080/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/f531c07b089b4ff091fb07d3d3894a6a' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/personal-project1' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_3} alt='mokup1' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>04 - 팀 프로젝트</p>

                                <h1 className='slider_title'>룩포웨더</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JAVAScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        메인 페이지, 서브 페이지, 회원 가입, 로그인, 아이디 찾기, 비밀번호 찾기, 회원 정보 수정 등 전체적인 레이아웃 구상 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    룩포웨더는 해당 지역의 API를 통하여 날씨를 확인하면서 그 날에 맞는 옷차림까지 추천 받을 수 있는 서비스이며,
                                    사용자들의 코디도 업로드 하여 다른 사람들과의 소통을 할 수 있는 커뮤니티 기능도 제공합니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='https://hamayj.today:8080/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/Look-For-Weather-ecb8ac4175684f53b231d6fdad634cae' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'> 
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/team5-LookForWeather/SeSAC-LFW' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_4} alt='mokup4' />
                                </div>
                            </div>
                        </div>


                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>05 - 워드프레스</p>

                                <h1 className='slider_title'>픽셀로</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JAVAScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    클라이언트의 의도에 따라 원페이지 형태로 상단에는 주요 제품들을 크고 넓은 UI로 나열하였으며,
                                    로고 색상인 퍼플 계열들을 메인 컬러로 사용해 심플하고 깔끔한 컨셉으로 작업을 진행하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='https://pixelro.com/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/401a180854144846bf2582a756be0f8c' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'
>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_5} alt='mokup5' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>06 - 워드프레스</p>

                                <h1 className='slider_title'>엔피코리아</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JAVAScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    클라이언트의 의도에 따라 웹 사용자가 편하게 정보를 찾고 이용할 수 있도록 검색 기능을 배치하여
                                    제품명을 입력하면 해당 제품 페이지로 이동되게끔 작업을 진행하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://www.npkorea.co.kr/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/029462783e0743fdb99a2c46a06027ba' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_6} alt='mokup6' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>07 - 워드프레스</p>

                                <h1 className='slider_title'>더휴앤</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JAVAScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    클라이언트의 의도에 따라 기업이 제공하는 서비스의 특·장점을 바탕으로 콘텐츠를 시각화하여 정보 전달의
                                    편의성을 높였으며 누구나 이해하기 쉽도록 단순하면서 간편한 UI로 사용자의 접근성을 높이도록 작업하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://thehuen.co.kr/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/b6971d877226434aa891d6584b0f4508' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='깃헙 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_7} alt='mokup7' />
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>
        </section>
    );
}

export default Portfolio;