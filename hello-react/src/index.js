import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function tick() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
//ReactDOM.render란, 컴포넌트를 페이지에 렌더링을 하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있습니다.
//이 함수의 첫 번째 파라미터에는 페이지에 렌더링할 내용을 JSX형태로 작성하고, 두 번째 파라미터에는 해당 JSX를 헨더링할 document 내부 요소를 설정함.
//여기서는 id가 root인 요소 안에 렌더링을 하도록 설정하였음. 이 요소는 public/index.html 파일을 열어보면 있음.
setInterval(tick, 1000);



serviceWorker.unregister();
