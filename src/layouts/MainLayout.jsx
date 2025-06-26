import React from 'react'
import { supabase } from '../service/supabase'
import gambarBg from '../assets/gambar.jpeg' // Gambar background lokal

export default function MainLayout() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <div
      className="bg-repeat bg-center min-h-screen"
      style={{
        backgroundImage: `url(${gambarBg})`,
      }}
    >
    </div>
  )
}
