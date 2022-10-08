import React from "react";
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';


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
    <Alert alert={alert}/>
      <Routes>
        <Route excat path="/" element={<Login showAlert={showAlert}/>}/>
        <Route excat path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route excat path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
