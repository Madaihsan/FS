// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { create } from 'zustand'
import { useEffect } from 'react'
import { supabase } from './service/supabase'

// Import komponen
import Guest from './pages/auth/guest'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register' // Pastikan huruf besar
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainLayout from './layouts/MainLayout'
import UploadPage from './pages/feature-menu/UploadPage.jsx'
import ChooseSignerPage from './pages/feature-menu/ChooseSignerPage.jsx'
import DownloadDocumentPage from './pages/feature-menu/DownloadDocumentPage.jsx'

// Auth Store dengan integrasi Supabase
export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true, // Mulai dengan loading true
  
  setUser: (user) => set({ user, loading: false }),
  setLoading: (loading) => set({ loading }),
  
  // Initialize auth state
  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      set({ user: session?.user || null, loading: false })
    } catch (error) {
      console.error('Error initializing auth:', error)
      set({ user: null, loading: false })
    }
  },
  
  // Fungsi login
  login: async (email, password) => {
    set({ loading: true })
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      
      set({ user: data.user, loading: false })
      return { success: true }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.message }
    }
  },

  // Fungsi register
  register: async (email, password) => {
    set({ loading: true })
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
      
      set({ loading: false })
      return { success: true, message: 'Cek email untuk verifikasi!' }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Fungsi logout
  logout: async () => {
    set({ loading: true })
    try {
      await supabase.auth.signOut()
      set({ user: null, loading: false })
    } catch (error) {
      console.error('Logout error:', error)
      set({ user: null, loading: false })
    }
  },
  
  // Cek apakah user sudah login
  isAuthenticated: () => {
    const state = get()
    return !!state.user
  }
}))

// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthStore()

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

// Auth Listener Hook
const useAuthListener = () => {
  const { setUser, initialize } = useAuthStore()

  useEffect(() => {
    // Initialize auth state
    initialize()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => subscription.unsubscribe()
  }, [setUser, initialize])
}

// Main App Component
export default function App() {
  const { user } = useAuthStore()
  
  // Setup auth listener
  useAuthListener()

  return (
    <Router>
      <Routes>
        {/* Halaman PUBLIK */}
        <Route path="/" element={<Guest />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/MainLayout" replace /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={user ? <Navigate to="/MainLayout" replace /> : <Register />} 
        />

        {/* Halaman PRIVATE */}
        <Route path="/Navbar" element={
          <PrivateRoute>
            <Navbar />
          </PrivateRoute>
        } />
        
        <Route path="/Sidebar" element={
          <PrivateRoute>
            <Sidebar />
          </PrivateRoute>
        } />
        
        <Route path="/MainLayout" element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        } />
        
        <Route path="/UploadPage" element={
          <PrivateRoute>
            <UploadPage />
          </PrivateRoute>
        } />
        
        <Route path="/download" element={
          <PrivateRoute>
            <DownloadDocumentPage />
          </PrivateRoute>
        } />
        
        <Route path="/choose-signer" element={
          <PrivateRoute>
            <ChooseSignerPage />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  )
}