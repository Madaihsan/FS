// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import App from './App.jsx'; 
import UploadPage from './pages/UploadPage.jsx';
import ChooseSignerPage from './pages/ChooseSignerPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
);