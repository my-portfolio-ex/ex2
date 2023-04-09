import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/global';

import { ToastProvider, ToastPosition } from '@hanseo0507/react-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider position={ToastPosition.bottomCenter} duration={2500}>
        <Global styles={globalStyle} />
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
/**
 * 이 프로젝트에서 yarn berry를 사용했지만 노드모듈이 생기는 이유는 
 * 다른 프로젝트들 중 그 패키지에 의존하는 모든 프로젝트들이 그에 대한 영향을 받게 될 위험이 있다.
 * 그래서 쓰기 접근이 제한된 저장소에 둬야 하는데 주로 쓰이는 방법이 node_modules/.cache폴더 안에 
 * 캐시 데이터를 저장하는 방법이다.
 * 
 * .lock으로 목표 버전을 수정하면 되지만 혹시나를 위해서 설치도 얼마 걸리지 않고 많은
 * 패키지를 쓰지 않을 프로젝트이기 때문에 그냥 두고 쓰려고 한다.

 */
