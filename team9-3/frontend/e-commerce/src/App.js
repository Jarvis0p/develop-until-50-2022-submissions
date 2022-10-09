import React from "react";
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Seller from "./components/Seller";
import Navbar from './components/Navbar';
import AddProduct from "./components/AddProduct";




function App() {
  
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

  return (
  

    <BrowserRouter>
    <Navbar/>
    <Alert alert={alert}/>
      <Routes>
        <Route excat path="/" element={<Home showAlert={showAlert}/>}/>
        <Route excat path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route excat path="/signup" element={<Signup showAlert={showAlert}/>}/>
        <Route excat path="/home" element={<Home showAlert={showAlert}/>}/>
        <Route excat path="/cart"element={<Cart />}/>
        <Route excat path="/seller"element={<Seller/>}/>
        <Route excat path="/addProducts"element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
