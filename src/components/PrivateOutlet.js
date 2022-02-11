import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateOutlet() {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to='/login' />;
}
