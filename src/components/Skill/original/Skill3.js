import './Skill.scss';

import $skill1 from './img/icon1.png';
import $skill2 from './img/icon2.png';
import $skill3 from './img/icon3.png';
import $skill4 from './img/icon4.png';


const Skill = () => {
    return (
        <section className='custom-section skill_container'>

            <div className='skillContant_inner'>

                {/* HTML5 */}
                <div className='skill_box'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_1'>
                            <img className="skill_card_icon" src={$skill1} alt="HTML5" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>HTML5</h2>

                            <ul className="skill_card_knowledge">
                                <li>웹표준 및 웹접근성 준수</li>
                                <li>마크업, 페이지 콘텐츠 구조화</li>
                                <li>브라우저 렌더링 프로세스 이해</li>
                                <li>폼요소, 테이블 사용</li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* CSS3 */}
                <div className=''>
                    <div className='skill_card'>
                        <div className='skill_card_header_2'>
                            <img className="skill_card_icon" src={$skill2} alt="CSS3" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>CSS3</h2>

                            <ul className="skill_card_knowledge">
                                <li>크로스 브라우징을 위한 스타일링</li>
                                <li>Grid & Flex 레이아웃</li>
                                <li>애니메이션 구현</li>
                                <li>반응형(미디어쿼리) 사용</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 자바스크립트 */}
                <div className=''>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_3'>
                            <img className="skill_card_icon" src={$skill3} alt="자바스크립트" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>JAVAScript</h2>

                            <ul className="skill_card_knowledge">
                                <li>ES6 문법 사용</li>
                                <li>프로토타입 개념 이해</li>
                                <li>비동기 & 동기 프로세스 이해</li>
                                <li>네비게이션 구현 및 폼 유효성검사 등</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 제이쿼리  */}
                <div className=''>
                    <div className='skill_card'>
                        <div className='skill_card_header_4'>
                            <img className="skill_card_icon" src={$skill4} alt="제이쿼리" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>JQuery</h2>

                            <ul className="skill_card_knowledge">
                                <li>JQuery 셀렉터 사용</li>
                                <li>이벤트 바인딩, 속성 정의</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 부트스트랩  */}
                <div className=''>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_5'>
                            <img className="skill_card_icon" src='' alt="부트스트랩" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Bootstrap</h2>

                            <ul className="skill_card_knowledge">
                                <li>레이아웃 구현</li>
                                <li>버튼, 입력창 등의 디자인 사용</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 리엑트  */}
                <div className=''>
                    <div className='skill_card'>
                        <div className='skill_card_header_6'>
                            <img className="skill_card_icon" src='' alt="리엑트" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>React</h2>

                            <ul className="skill_card_knowledge">
                                <li>컴포넌트를 분리하여 작업</li>
                                <li>React Router 사용 경험</li>
                                <li>Hooks 사용 경험</li>
                                <li>Redux 상태 관리 이해</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sass */}
                <div className=''>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_7'>
                            <img className="skill_card_icon" src='' alt="Sass" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Sass</h2>

                            <ul className="skill_card_knowledge">
                                <li>JQuery 셀렉터 사용</li>
                                <li>이벤트 바인딩, 속성 정의</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* HTML5 */}
                <div className='skill_box'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_1'>
                            <img className="skill_card_icon" src={$skill1} alt="HTML5" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>HTML5</h2>

                            <ul className="skill_card_knowledge">
                                <li>웹표준 및 웹접근성 준수</li>
                                <li>마크업, 페이지 콘텐츠 구조화</li>
                                <li>브라우저 렌더링 프로세스 이해</li>
                                <li>폼요소, 테이블 사용</li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Skill;