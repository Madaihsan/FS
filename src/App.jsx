import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Guest from './pages/auth/guest'
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainLayout from './layouts/MainLayout'
import UploadPage from './pages/feature-menu/UploadPage.jsx'
import ChooseSignerPage from './pages/feature-menu/ChooseSignerPage.jsx'
import DownloadDocumentPage from './pages/feature-menu/DownloadDocumentPage.jsx'
import AkunSaya from "./pages/feature-menu/AkunSaya";

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
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/download" element={<DownloadDocumentPage />} />
        <Route path="/choose-signer" element={<ChooseSignerPage />} />
        <Route path="/akunsaya" element={<AkunSaya />} />
      </Routes>
    </Router>
  )
}
