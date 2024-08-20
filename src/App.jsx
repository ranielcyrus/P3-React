import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from './pages/Men';
import Women from './pages/Women'
import Cart from "./components/Cart"
import { ItemProvider } from "./components/ItemContext";
import {Login}  from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ProductDetail } from "./components/ProductDetail";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>  
      <ItemProvider>
        <Router>
          <Routes>
                <Route path="/" element={<Login />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/men" element={<Men />}/>
                <Route path="/women" element={<Women />}/>
                <Route path="/product-detail/:name" element={<ProductDetail />}/>
                <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ItemProvider>
    </>
  )
}

export default App;
