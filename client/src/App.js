import React, { useState, useEffect } from "react";
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

function App() {
  const [contentId, setContentId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContentId = async() => {
    try {
      setError(null);
      setContentId(contentId);
      setLoading(true);
      const response = await axios.get("http://localhost:4002/camping")
      setContentId(response.data);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContentId();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage 
          contentId = {contentId}
          isLoading={isLoading}/>} />
        {/* <Route path="/detailpage" element={<Detailpage />} /> */}
        <Route path="/detailpage2/:contentId" element={<Detailpage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
