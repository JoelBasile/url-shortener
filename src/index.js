import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDyMHnh4QVCokdGPihDK59EOfx5YGOChg",
  authDomain: "url-shortener-44307.firebaseapp.com",
  projectId: "url-shortener-44307",
  storageBucket: "url-shortener-44307.appspot.com",
  messagingSenderId: "148807076511",
  appId: "1:148807076511:web:429e5d74e22ec9417770aa",
  measurementId: "G-1HDNCM3MDX"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
