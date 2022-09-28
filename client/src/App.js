import React from 'react';
import { SignUpModal } from './component/modal/SignUpModal';
import './App.css';
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
// import Detailpage from "./pages/detailpage/Detailpage";
import Detailpage2 from "./pages/detailpage/Detailpage2";
import axios from "axios";

// function ContentId() {

//   if (loading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;

//   if (!contentId) return null;
//   console.log(contentId);
//   return (
//     <>
//       <ul>
//         {contentId.map((contentId) => (
//           <li key={contentId.contentId}>{contentId.campingName}</li>
//         ))}
//       </ul>
//       <button onClick={fetchContentId}>다시 불러오기</button>
//     </>
//   );
// }

axios
  .get("http://localhost:4002/camping")
  .catch(function (error) {})
  .then((response) => {
    // console.log(response.data);
  });


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage 
          contentId = {contentId}
          contentIdImg = {contentIdImg}/>} />
        {/* <Route path="/detailpage" element={<Detailpage />} /> */}
        <Route path="/detailpage2" element={<Detailpage2 />} />
      </Routes>
    </BrowserRouter>
    <>
      <div className="App">
        <div className='nav'>
          {/*<button type='button' aria-hidden='true' class='signup'>회원가입</button>*/}
          <Nav />
        </div>
      </div>
    </>
    <>
      <div className="App">
        <div className='box'>
          <div classNmae='sub_title'>SignUpModal</div>
        </div>
      </div>
    </>
    </div>
  );
}

export default App;