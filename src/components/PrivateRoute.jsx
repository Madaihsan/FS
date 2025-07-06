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