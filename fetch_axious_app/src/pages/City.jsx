import React from 'react';
import { useParams, Link } from 'react-router-dom';
import WeatherWidget from '../Reusable_components/WeatherWidget';

// Наш довідник координат
const citiesCoords = {
  "Kyiv": { lat: 50.45, lon: 30.52 },
  "Lviv": { lat: 49.83, lon: 24.02 },
  "Odesa": { lat: 46.48, lon: 30.72 },
  "Berlin": { lat: 52.52, lon: 13.41 },
  "London": { lat: 51.50, lon: -0.12 }
};

const City = () => {
  const { name } = useParams(); // Отримуємо назву міста з URL

  // Знаходимо координати для цього міста
  // Якщо міста немає в списку, ставимо дефолтні (наприклад, Київ)
  const cityData = citiesCoords[name] || citiesCoords["Kyiv"];

  const saveToFav = () => {
    const favs = JSON.parse(localStorage.getItem('favCities') || '[]');
    if (!favs.includes(name)) {
      localStorage.setItem('favCities', JSON.stringify([...favs, name]));
      alert(`${name} додано в обране!`);
    }
  };

  return (
    <div className="city-page">
      <h1>Місто: {name}</h1>
      
      {/* ТЕПЕР ПЕРЕДАЄМО ДИНАМІЧНІ ДАНІ */}
      <WeatherWidget lat={cityData.lat} lon={cityData.lon} />
      
      <button onClick={saveToFav}>Додати в обране</button>
      <br />
      <Link to={`/city/${name}/news`}>Переглянути новини міста</Link>
    </div>
  );
};

export default City;