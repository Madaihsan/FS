import React, { useState } from 'react';
import { supabase } from '../../service/supabase';
import { useNavigate, Link } from 'react-router-dom';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.902,36.638,44,30.886,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);
const FacebookIcon = () => (
    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
    </svg>
);
const EmailIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
);
const LockIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
    if (error) {
      setError(error.message)
    } else {
      navigate('/MainLayout')
    }
  }
  
  const handleOAuthLogin = async (provider) => {
    await supabase.auth.signInWithOAuth({ provider });
  };
  

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold">Selamat Datang di Signature</h1>
            <p className="text-gray-500 mt-2">Silakan masuk untuk melanjutkan</p>
          </div>

          <div className="space-y-4 mb-8">
            <button onClick={() => handleOAuthLogin('google')} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
              <GoogleIcon />
              <span className="font-medium text-gray-700">Masuk Dengan Google</span>
            </button>
            <button onClick={() => handleOAuthLogin('facebook')} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
              <FacebookIcon />
              <span className="font-medium text-gray-700">Masuk Dengan Facebook</span>
            </button>
          </div>

          <form onSubmit={handleLogin}>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EmailIcon />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Kata Sandi"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
              Masuk
            </button>
            
            <p className="mt-6 text-sm text-center text-gray-600">
              Belum mempunyai akun?{' '}
              <Link to="/register" className="font-bold text-blue-600 hover:underline">
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            Solusi Tanda Tangan Digital untuk Individu dan Tim Profesional
          </h2>
          <p className="text-base leading-relaxed opacity-90">
            Signature adalah platform tanda tangan digital yang memudahkan Anda menandatangani, meminta tanda tangan dari pihak lain, dan mengelola dokumen resmi secara aman dan efisien. Baik untuk kebutuhan pribadi maupun kolaborasi tim atau organisasi, Signature hadir untuk mempercepat proses persetujuan dokumen — kapan saja, di mana saja.
          </p>
        </div>
      </div>
    </div>
  );
}