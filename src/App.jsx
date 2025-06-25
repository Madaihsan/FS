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