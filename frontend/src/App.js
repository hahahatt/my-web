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

import React, { useRef, useState } from "react";
import "./App.css";
import "./css/next_section.css"
import "./css/shooting_star.css"
import "./css/web_scroll.css"

const portData = [
  {id:1, title: "가나다라마바사아자차타파하가나다", description: "강남에 있는 최고의 고기 맛집입니다."},
  {id:2, title: "홍대 카페 추천", description: "홍대에 있는 아늑한 카페를 추천합니다."},
  {id:3, title: "부산 여행 코스", description: "부산에서 꼭 가봐야 할 여행 코스입니다."},
  {id:4, title: "제주도 맛집", description: "제주도에서 유명한 맛집 리스트입니다."},
  {id:5, title: "서울 야경 명소", description: "서울에서 즐길 수 있는 아름다운 야경 명소입니다."}
]

export default function App() {

  const [selected, setSelected] = useState(null);

  const nextSectionRef = useRef(null);
  const mainSectionRef = useRef(null);

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else {
      mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const scrollToNext = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
//onWheel={handleWheel}
  return (
    <div className="app" onWheel={handleWheel}>
      <div className="main-section" ref={mainSectionRef}>
        <div className="shooting-stars">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="shooting-star"></span>
          ))}
        </div>
        
        <div className="scroll-down" onClick={scrollToNext}>
          ↓
        </div>
      </div>

      <div className="next-section" ref={nextSectionRef}>
        <h2>About Me</h2>
        <p>This is the next section content.</p>

        <h2>크아아악</h2>
        <div className="portfolio-grid">
          {portData.map((item) => (
            <div key={item.id} className="portfolio-item"
            onClick={() => setSelected(item)}>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="portfolio-modal" onClick={() => setSelected(null)}>
          <div className="portfolio-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}