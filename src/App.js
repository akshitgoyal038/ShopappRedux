import logo from './assets/logo.png';
import './App.css';
import Navbar from "./componenets/Navbar"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import "./style/Navbar.css"
function App() {
  return (
    <>
         <div className="bg-slate-900">
            <Navbar/>
       </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>

    </>
  );
}

export default App;
