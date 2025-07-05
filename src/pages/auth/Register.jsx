import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../App'
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const { register, loading } = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    
    const result = await register(formData.email, formData.password)
    
    if (result.success) {
      setSuccess(result.message)
      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
        },
      },
    })
    if (error) {
      setError(error.message)
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (minimal 6 karakter)"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.password}
          minLength={6}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p className="mt-4 text-sm text-center">
          Sudah punya akun? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    <div className="flex flex-col lg:flex-row min-h-screen font-sans">
      {/* KIRI */}
      <div className="w-full lg:w-[calc(100%-616px)] bg-[#F8F9FA] flex items-center justify-center py-12 px-6">
        <form onSubmit={handleRegister} className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-2">Selamat Datang di Signature</h1>
          <p className="mb-6 text-gray-700">Daftar akun dan mulai tanda tangan</p>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          {/* Input Nama */}
          <div className="flex items-center border rounded px-3 py-2 mb-4">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Nama"
              className="w-full bg-transparent focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Email */}
          <div className="flex items-center border rounded px-3 py-2 mb-4">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Password */}
          <div className="flex items-center border rounded px-3 py-2 mb-4">
            <Lock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Kata Sandi"
              className="w-full bg-transparent focus:outline-none"
              onChange={handleChange}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition mb-4"
          >
            Daftar
          </button>

          {/* Link Login */}
          <p className="text-sm mb-2">
            Sudah menjadi anggota?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Masuk
            </a>
          </p>

          {/* Terms */}
          <p className="text-xs text-gray-500">
            Dengan membuat akun, Anda menyetujui{' '}
            <span className="underline cursor-pointer">Ketentuan Layanan</span> dan{' '}
            <span className="underline cursor-pointer">Ketentuan Privasi</span> iLovePDF.
          </p>
        </form>
      </div>

      {/* KANAN */}
      <div className="w-full lg:w-[616px] bg-[#84C5F7] flex items-center justify-center text-left text-white px-8 py-12">
        <div className="max-w-md">
          <h3 className="text-2xl font-semibold mb-4">
            Solusi Tanda Tangan Digital untuk Individu dan Tim Profesional
          </h3>
          <p className="leading-relaxed text-base">
            Signature adalah platform tanda tangan digital yang memudahkan Anda menandatangani,
            meminta tanda tangan dari pihak lain, dan mengelola dokumen resmi secara aman dan efisien.
            Baik untuk kebutuhan pribadi maupun kolaborasi tim atau organisasi, Signature hadir untuk
            mempercepat proses persetujuan dokumen — kapan saja, di mana saja.
          </p>
        </div>
      </div>
    </div>
  )
}