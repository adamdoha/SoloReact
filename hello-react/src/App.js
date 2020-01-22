//App.js에서는 App컴포넌트가 만들어짐.
// import React from 'react'; //리액트를 불러와서 사용할 수 있게 해줌
// import './App.css';

// function App() {
//   //function 이라는 키워드를 사용하여 컴포넌트를 만들었음. 이러한 것을 함수형 컴포넌트라고 부름.
//   const name = '리액트';
//   return (
//     <>
//       {/*주석은 이렇게 합니까*/}
//       <div className="react">{name}</div>
//       {/*이렇게하셈 */}
//       <input />
//     </>
//   );
// }

// export default App;
// //JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생김.
// //이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.
// /* 컴포넌트에 여러요소가 있다면 반드시 부모요소 하나로 감싸야 합니다.
//  Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있음.*/

import React from 'react';
import EventPractice from './EventPractice';
const App = () => {
  return <EventPractice />;
};

export default App;
