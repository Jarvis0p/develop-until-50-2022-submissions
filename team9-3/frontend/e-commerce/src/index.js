import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserState from './Context/User/UserState';
import ProductState from "./Context/Product/ProductState";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserState>
   <ProductState>
    <App />
    </ProductState>
  </UserState>
);

