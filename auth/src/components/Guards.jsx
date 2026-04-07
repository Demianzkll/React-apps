import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export const RoleBasedRoute = ({ allowedRole }) => {
  const { user } = useAuth();
  return allowedRole.includes(user?.role) 
    ? <Outlet /> 
    : <Navigate to="/dashboard" replace />;
};