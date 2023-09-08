import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Header';
import Filter from './Titles'
import App from './Table';
import reportWebVitals from './reportWebVitals';
import Titles from './Titles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar />
    <Titles/>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
