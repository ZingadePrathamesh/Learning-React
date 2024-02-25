import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
