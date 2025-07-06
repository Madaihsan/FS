import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { create } from 'zustand'
import { useEffect } from 'react'
import { supabase } from './service/supabase'

// Import komponen
import Guest from './pages/auth/Guest'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainLayout from './layouts/MainLayout'
import UploadPage from './pages/feature-menu/UploadPage.jsx'
import ChooseSignerPage from './pages/feature-menu/ChooseSignerPage.jsx'
import DownloadDocumentPage from './pages/feature-menu/DownloadDocumentPage.jsx'
import AkunSaya from './pages/feature-menu/AkunSaya'
import Dashboard from './pages/feature-menu/Dashboard'
import Kontak from './pages/feature-menu/Kontak'
import Keamanan from './pages/feature-menu/Keamanan'
import Organisasi from './pages/feature-menu/Organisasi'
import TugasAkhir from './pages/feature-menu/TugasAkhir'
import Terkirim from './pages/feature-menu/Terkirim'
import Inbox from './pages/feature-menu/Inbox'
import TertandaTangan from './pages/feature-menu/TertandaTangan'
import Pengaturan from './pages/feature-menu/Pengaturan'

// Zustand store untuk autentikasi
export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,
  
  setUser: (user) => set({ user, loading: false }),
  setLoading: (loading) => set({ loading }),

  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      set({ user: session?.user || null, loading: false })
    } catch (error) {
      console.error('Error initializing auth:', error)
      set({ user: null, loading: false })
    }
  },

  login: async (email, password) => {
    set({ loading: true })
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      set({ user: data.user, loading: false })
      return { success: true }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.message }
    }
  },

  register: async (email, password) => {
    set({ loading: true })
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      set({ loading: false })
      return { success: true, message: 'Cek email untuk verifikasi!' }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.message }
    }
  },

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

  isAuthenticated: () => {
    const state = get()
    return !!state.user
  }
}))

// Komponen PrivateRoute
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthStore()

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

// Custom hook untuk mendengarkan perubahan auth
const useAuthListener = () => {
  const { setUser, initialize } = useAuthStore()

  useEffect(() => {
    initialize()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      subscription?.unsubscribe()
    }
  }, [])
}

// Komponen utama
export default function App() {
  useAuthListener()

  return (
    <Router>
      <Routes>
        {/* Layout utama, proteksi via PrivateRoute */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="akunsaya" element={<AkunSaya />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="keamanan" element={<Keamanan />} />
          <Route path="organisasi" element={<Organisasi />} />
          <Route path="tugas-akhir" element={<TugasAkhir />} />
          <Route path="terkirim" element={<Terkirim />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="tertandatangan" element={<TertandaTangan />} />
          <Route path="pengaturan" element={<Pengaturan />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Guest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman Private di luar /home */}
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
        <Route path="/akunsaya" element={
          <PrivateRoute>
            <AkunSaya />
          </PrivateRoute>
        } />

        {/* Fallback jika route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
