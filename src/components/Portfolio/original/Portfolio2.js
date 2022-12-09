
import './Portfolio.scss';
import './slick-theme.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import $mokup_1 from './img/mockup_01.png';


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
        threshold: 1.0,
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_slider_l');
            } else {
                entry.target.classList.remove('active__l');
            }
        });
    }, options);

    const slider_l = document.querySelectorAll('.slider_left');

    slider_l.forEach(el => observer.observe(el));

    return (
        <section className='custom-section portfolio_container'>
            <div className='bg_box'>
                <div className='portfolioContant_inner'>

                    <Slider {...settings}>
                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>01 - 팀프로젝트</p>

                                <h1 className='slider_title'>내일 뭐하지?</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML</p>
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
                                        <a href='http://seryeong.cloud:3000/' target='_blank'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/a3bb0a772b0a4494b5cfc9db603ac806' target='_blank'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/tmr-mohaji/mohaji' target='_blank'>
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


                    </Slider>

                </div>

            </div>
        </section>
    );
}

export default Portfolio;