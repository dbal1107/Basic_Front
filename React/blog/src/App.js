/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = 'React Study';
  let [title, complete] = useState(['JSX', 'State', 'Props']);
  let [titleNo, select] = useState(0);

  let [date, b] = useState(['20230616', '20230617', '20230618']);

  //TODO click useState -> 반복문으로 소프트코딩 만들기!!!!
  let [click, value] = useState([0,0,0]);
  console.log(click);
  // for(let i=0; i<title.length; i++){
  //   // click.splice(i, 0, 0);
  // }

  let [modal, setModal] = useState(false);
  
  // function plus() {
  //   value(click+1);
  //   console.log(click);
  // }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>React Study</h4>
      </div>
      
      {
        title.map(function(name, i){
          return(
            <div className="list" key={i}>
              <h4 onClick={ () => {
                // modal == false ? setModal(true) : setModal(false);
                setModal(!modal); // 간략하게: modal의 반대편을 표출하라
                select(i);
              }}>{ name +'　　'}
                {/* <span onClick={plus}>🎇</span> {click[i]} */}
                <span onClick={()=>{
                  let clickCopy = [...click];
                  clickCopy[i] = clickCopy[i] + 1;
                  value(clickCopy)
                }}>🎇</span> {click[i]}
              </h4>
              <p>{ date[i] }</p>
            </div>
          )
        })
      }

      {/* <button onClick={ ()=>{
        let sort = [...title];
        sort = sort.sort(); // sort() : 배열을 정렬하고 알아서 저장한다. (변수에 담을 필요 없음)
        complete(sort);
        console.log(sort);
      }}>정렬</button>
      <div className="list">
        <h4>{ title[0] } 
          <div>
            <button onClick={ () => {
              // modal == false ? setModal(true) : setModal(false);
              setModal(!modal); // 간략하게: modal의 반대편을 표출하라
            }}>상세보기
            </button>
          </div>
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
      </div> */}

      {
        modal == true ? <Modal title={title} titleNo={titleNo} complete={complete}/> : null
      }
      
    </div>
  );
}

// 자식
function Modal(props) {
  return (
    <div className='detail-modal'>
      <h3>{props.title[props.titleNo]} is JS grammar for React</h3>
      <h4>{props.title[props.titleNo]} MEMO</h4>
      <ul>
        <li>It's so simple</li>
        <li>But, a little bit different with modern JS</li>
      </ul>
      <button onClick={() => {
        let copyTitle = [...props.title];
        copyTitle[props.titleNo] = 'Study Hard!';
        props.complete(copyTitle);
        }}>수정</button>
    </div>
  )
}

export default App;
