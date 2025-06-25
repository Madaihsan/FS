// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Guest from './pages/guest'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="*" element={<div>404 - Halaman tidak ditemukan</div>} />
      </Routes>
    </Router>
  )
}
