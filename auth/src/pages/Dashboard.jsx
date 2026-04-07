import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Робоча панель</h1>
      <p>Вітаємо у системі! Ця сторінка є <strong>захищеною</strong>.</p>
      
      <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Твій профіль:</h3>
        <ul>
          <li><strong>Роль:</strong> {user?.role}</li>
          <li><strong>Статус сесії:</strong> Активна</li>
          <li><strong>Токен:</strong> {user?.token?.substring(0, 10)}...</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;