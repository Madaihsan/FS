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
