/* eslint-disable*/

import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','3333333']);
  
  function 글제목바꾸기() {
    var newArray = [...글제목];
    newArray = newArray.sort();
    글제목변경( newArray );
  }
  
  let posts = { fontSize : '1.8em'};

  let [따봉, 따봉변경] = useState(0);
  
  return (
    <div className="App">
        <div className='black-nav'>
          <div style={ posts }>Tool</div>
        </div>
        <button onClick={ ()=>{글제목바꾸기()} }>버튼</button>
        <div className='list'>
          <h3>{ 글제목[0] } 
          <span onClick={ ()=>{ 따봉변경(따봉+1) } }>▲</span> 
          { 따봉 } </h3>
          <p>대충 내용</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{ 글제목[1] }</h3>
          <p>대충 내용</p>
          <hr/>
        </div>        
        <div className='list'>
          <h3>{ 글제목[2] }</h3>
          <p>대충 내용</p>
          <hr/>
        </div>


        <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상새내용</p>
  </div>
  )
}



export default App;
