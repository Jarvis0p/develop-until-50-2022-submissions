import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserState from './Context/User/UserState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserState>
    <App />
  </UserState>
);

