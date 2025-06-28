// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage.jsx';
import ChooseSignerPage from './pages/ChooseSignerPage.jsx';
import DownloadDocumentPage from './pages/DownloadDocumentPage.jsx'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<UploadPage />} />
      <Route path="/choose-signer" element={<ChooseSignerPage />} />
      <Route path="/download" element={<DownloadDocumentPage />} /> 


    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Guest from './pages/auth/guest'
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/MainLayout" element={<MainLayout />} />
      </Routes>
    </Router>
  )
}

