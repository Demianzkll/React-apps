import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import { ProtectedRoute, RoleBasedRoute } from './components/Guards';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Публічні */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            {/* Тільки після Login */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              
              {/* Тільки Admin */}
              <Route element={<RoleBasedRoute allowedRole="admin" />}>
                <Route path="admin" element={<Admin />} />
              </Route>
            </Route>

            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;