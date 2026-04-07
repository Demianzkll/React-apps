import { useFetch } from '../Logic/useFetch';
import Loader from './Loader';

const WeatherWidget = ({ lat, lon }) => {
  const { data, loading, error } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
  );

  if (loading) return <Loader />;
  if (error) return <p>Не вдалося завантажити погоду</p>;

  return (
    <div className="weather-widget">
      <h3>Погода: {data.current.temperature_2m}°C</h3>
    </div>
  );
};
export default WeatherWidget;