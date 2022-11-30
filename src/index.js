import React from 'react';
import ReactDOM from 'react-dom/client';

// 공통 CSS 정의
import './components/Commons/Commons.scss';

import Banner from './components/Banner/Banner';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Banner />
  </>
);

