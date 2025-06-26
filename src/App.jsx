// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Guest from './pages/auth/guest'
import Login from './pages/auth/Login'
import Register from './pages/auth/register'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
