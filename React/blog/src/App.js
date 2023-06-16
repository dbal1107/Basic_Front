/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post = 'React Study';
  let [title, complete] = useState(['Start', 'JSX', 'state']);
  let [date, b] = useState(['20230616', '20230617', '20230618']);
  let [click, value] = useState(0);

  function Plus() {
    value(click+1)
  }
  
  // let

  // console.log('')
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>React Study</h4>
      </div>
      <div className="list">
        <h4>{ title[0] } <span onClick={Plus}>🎇</span> {click}</h4>
        <p>{ date[0] }</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>{ date[1] }</p>
      </div>
        {/* <button onClick={() => {complete('완료')}}>완료</button> */}
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>{ date[2] }</p>
      </div>
    </div>
  );
}

export default App;
