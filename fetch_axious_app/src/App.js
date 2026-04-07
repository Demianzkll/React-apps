import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import City from './pages/City';
import News from './pages/News';
import Favorites from './pages/Favorites';

import Header from './Reusable_components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:name" element={<City />} />
            <Route path="/city/:name/news" element={<News />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<h2>Сторінку не знайдено</h2>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;