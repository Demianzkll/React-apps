import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login({ role, token: 'fake-jwt-token-123' });
    navigate('/dashboard');
  };


  
  return (
    <div>
      <h2>Вхід</h2>
      <button onClick={() => handleLogin('user')}>Увійти як User</button>
      <button onClick={() => handleLogin('admin')} style={{ marginLeft: '10px' }}>
        Увійти як Admin
      </button>
    </div>
  );
};
export default Login;