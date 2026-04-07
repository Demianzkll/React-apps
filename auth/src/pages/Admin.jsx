const Admin = () => {
  return (
    <div style={{ border: '2px solid red', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: 'red' }}> Панель Адміністратора</h1>
      <p>Це секретна зона. Тільки користувачі з роллю <strong>admin</strong> можуть бачити цей текст.</p>
      
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#ffebee' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Дія</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Редагувати систему</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Видалити користувача</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;