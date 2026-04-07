import { useState, useEffect } from 'react';
import CityCard from '../Reusable_components/CityCard';

const Favorites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favCities') || '[]');
    setFavs(saved);
  }, []);

  return (
    <div>
      <h1>Твої улюблені міста</h1>
      {favs.length > 0 ? (
        favs.map(city => <CityCard key={city} name={city} />)
      ) : <p>Список порожній</p>}
    </div>
  );
};
export default Favorites;