// src/components/PrivateRoute.jsx
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../service/supabase'

export default function PrivateRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      setIsLoggedIn(!!data.session)
      setIsLoading(false)
    }
    checkSession()
  }, [])

  if (isLoading) {
    return <p className="text-center mt-10">Sedang memuat...</p>
  }

  return isLoggedIn ? children : <Navigate to="/login" />
}
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  // Kalau masih loading, tampilkan loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Kalau user belum login, lempar ke halaman login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Kalau sudah login, tampilkan halaman yang diminta
  return children;
};

export default PrivateRoute;
