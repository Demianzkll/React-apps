const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Головна сторінка</h1>
      <p>Ця сторінка доступна всім відвідувачам без винятку.</p>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px dashed #ccc' }}>
        <h3>Про наш сервіс</h3>
        <p>Це демонстрація системи аутентифікації на React.</p>
      </div>
    </div>
  );
};

export default Home;