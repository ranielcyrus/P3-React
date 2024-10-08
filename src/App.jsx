import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from './pages/Category';
import Cart from "./components/Cart";
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
                <Route path="/category/:category" element={<Category />}/>
                <Route path="/product-detail/:name" element={<ProductDetail />}/>
                <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ItemProvider>
    </>
  )
}

export default App;
