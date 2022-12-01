import React, { useState, useEffect } from 'react';

import './BannerContent.scss';

const BannerContent = () => {
    const [bannerTitle, setBannerTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '     WELCOME TO MY \n     PORTFOLIO';
    const delay = 4000;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setBannerTitle((prevTitleValue) => {
                let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                setCount(count + 1);

                if (count >= completionWord.length) {
                    setBannerTitle('     WELCOME TO MY \n     PORTFOLIO');
                }

                return result;
            });
        }, 270);

        return () => {
            clearInterval(typingInterval);
        };
    });

    return (
        <article>
            <div className='bannerContant_inner'>
                <pre className="banner_title">{bannerTitle}</pre>
                <p className='banner_p'>안녕하세요! 프론트엔드 개발자를 꿈꾸는 방장원입니다.</p>
            </div>

            <div className="banner_bg">
                <span className="ball1"></span>
                <span className="ball2"></span>
            </div>

            <div className='banner_detail'>
                <small>해당 흄페이지의 해상도는 PC버전을 기준으로 최적화되어 있습니다.</small>
            </div>
        </article>
    );
}

export default BannerContent;