import React from 'react';

import './Contact.scss';


const Contact = () => {
    function activeMethod(event) {
        const current = event.currentTarget;
        const chkActive = current.classList.value.indexOf("active_qa");
        console.log(current);
        closeMothodAll();

        if (chkActive === -1) {
            current.classList.add("active_qa");
        }
    }

    function closeMothodAll() {
        let bx = document.getElementsByClassName("qa_ul");

        for (let i = 0; i < bx[0].children.length; i++) {
            bx[0].children[i].classList.remove("active_qa");
            // console.log(bx[0].children.length);
        }
    }

    

    return (
        <section className='custom-section contact_container'>
            <div className='contactContant_inner'>

                <div className='qa_box'>
                    <ul className="qa_ul">
                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>간단한 자기소개 하는 곳</p>

                                <div className='qa_detail'>
                                    관련된 내용을 정의 하는 곳 <br />
                                    다양한 내용들을 적을 수 있다.
                                </div>
                            </div>
                        </li>

                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>간단한 자기소개 하는 곳</p>

                                <div className='qa_detail'>
                                    관련된 내용을 정의 하는 곳 <br />
                                    다양한 내용들을 적을 수 있다.
                                </div>
                            </div>
                        </li>


                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>간단한 자기소개 하는 곳</p>

                                <div className='qa_detail'>
                                    관련된 내용을 정의 하는 곳 <br />
                                    다양한 내용들을 적을 수 있다.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </section>
    );
}

export default Contact;