/*
import React, { useState } from 'react';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';

  // [a,b] a->남자 코트 추천, b->함수
  // state에 저장하는 이유
  // 웹이 App처럼 동작하게 만들고 싶어서.. state 변경되면 HTML이 자동으로 재렌더링됨.
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집']); 

  let pageTitle = '개발 Blog';
  return (
    <div className="App">
      <div className='black-nav'>
        <div>{ pageTitle }</div>
      </div>
      <div className="list">
        <h3>{ title[0] }</h3>
        <p>8월 22일 발행</p>
        <hr/>
      </div>
      <p>Hello World!!</p>
    </div>
  );
}

export default App;
*/

import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="shooting-stars">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="shooting-star"></span>
        ))}
      </div>
    </div>
  );
}