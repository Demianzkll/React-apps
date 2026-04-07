import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherWidget from '../Reusable_components/WeatherWidget';

// Копіюємо сюди той самий довідник координат
const citiesCoords = {
  "Kyiv": { lat: 50.45, lon: 30.52 },
  "Lviv": { lat: 49.83, lon: 24.02 },
  "Odesa": { lat: 46.48, lon: 30.72 },
  "Berlin": { lat: 52.52, lon: 13.41 },
  "London": { lat: 51.50, lon: -0.12 }
};

const Weather = () => {
  const { name } = useParams();

  // Знаходимо координати для міста з URL
  const cityData = citiesCoords[name] || citiesCoords["Kyiv"];

  return (
    <div className="weather-page">
      <h1>Детальна погода для {name}</h1>
      
      {/* Тепер передаємо динамічні координати */}
      <WeatherWidget lat={cityData.lat} lon={cityData.lon} /> 
      
      <div className="forecast-details">
        <p>Координати: {cityData.lat}, {cityData.lon}</p>
        <p>Тут можна додати графік на 7 днів у майбутньому.</p>
      </div>
    </div>
  );
};

export default Weather;