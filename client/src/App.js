import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
// import Detailpage from "./pages/detailpage/Detailpage";
import Detailpage2 from "./pages/detailpage/Detailpage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/detailpage" element={<Detailpage />} /> */}
        <Route path="/detailpage2" element={<Detailpage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
