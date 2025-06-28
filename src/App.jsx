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
