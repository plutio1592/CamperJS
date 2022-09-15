import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Detailpage from "./pages/detailpage/Detailpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/detailpage" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
