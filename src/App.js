import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";
import Checkout from "./component/Checkout";
import About from "./component/About";
import Contact from "./component/Contact";
import bgImage from "./space.jpg" ;



function App() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize:'500px',backgroundAttachment:'fixed' } }>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Product/:id" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>

      </div>
      </>
  );
}

export default App;
