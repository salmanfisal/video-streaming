import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header.js";
import Login from "./login.js";
import Home from "./home.js";
import Detail from "./detail.js";
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
           <Route path="/detail/:id" element={<Detail />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
