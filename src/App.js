import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Product/:id" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
