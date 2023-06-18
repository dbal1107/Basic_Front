/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = 'React Study';
  let [title, complete] = useState(['Start', 'JSX', 'State']);
  let [date, b] = useState(['20230616', '20230617', '20230618']);
  let [click, value] = useState(0);
  let [modal, setModal] = useState(false);
  
  function plus() {
    value(click+1);
    console.log(click);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>React Study</h4>
      </div>
      {
        modal == true ? <Modal></Modal> : null
      }
      <button onClick={ ()=>{
        let sort = [...title];
        sort = sort.sort(); // sort() : 배열을 정렬하고 알아서 저장한다. (변수에 담을 필요 없음)
        complete(sort);
        console.log(sort);
      }}>정렬</button>
      <div className="list">
        <h4>{ title[0] } 
          <button onClick={ () => {
            // modal == false ? setModal(true) : setModal(false);
            setModal(!modal); // 간략하게: modal의 반대편을 표출하라
          }}>상세보기
          </button>
        </h4>
        <p>{ date[0] }</p>
      </div>
      <div className="list">
        <h4>{ title[1] }
          <span onClick={plus}>🎇</span> {click}
        </h4>
        <p>{ date[1] }</p>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[1] = '완료!';
        complete(copy);
        console.log(title==copy); // false
      }}>완료</button>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>{ date[2] }</p>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='detail-modal'>
      <h3>JSX is JS grammar for React</h3>
      <p>MEMO</p>
      <ul>
        <li>It's so simple</li>
        <li>But, a little bit different with modern JS</li>
      </ul>
    </div>
  )
}

export default App;
