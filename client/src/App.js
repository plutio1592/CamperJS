<<<<<<< HEAD

=======
import React from 'react';
import { SignUpModal } from './component/modal/SignUpModal';
>>>>>>> adc1dbca7b1ef87139ae978cb0415142cfba7b1c
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Mainpage from './pages/mainpage/Mainpage';


function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
=======
    <>
      <div className="App">
        <div className='box'>
          <div classNmae='sub_title'>SignUpModal</div>
        </div>
      </div>
    </>
>>>>>>> adc1dbca7b1ef87139ae978cb0415142cfba7b1c
  );
}

export default App;
