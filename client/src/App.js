import React from 'react';
import Nav from './component/Nav'
import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <div className='nav'>
          {/*<button type='button' aria-hidden='true' class='signup'>회원가입</button>*/}
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
