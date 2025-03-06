import React from "react";
import {Route, Routes } from 'react-router-dom'
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Myprofile from "./pages/Myprofile";
import MyProducts from "./pages/MyProducts";
import BuyProduct from "./pages/BuyProduct";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/products/:specialproducts' element={<Products/>} />
      <Route path='/login' element={<Login/>}/>
     
      <Route path='/contact'element={<ContactUs/>}/>
      <Route path='/my-profile' element={<Myprofile/>}/>
      <Route path='/my-products' element={<MyProducts/>}/>
      <Route path='/Buyproduct/:productid' element={<BuyProduct/>}/>

      

    </Routes>
    <Footer/>
     
    </div>
  );
};

export default App;
