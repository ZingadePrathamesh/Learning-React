import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
