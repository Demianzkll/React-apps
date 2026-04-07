import { Link } from 'react-router-dom';

const CityCard = ({ name }) => (
  <div className="city-card">
    <h3>{name}</h3>
    <Link replace to={`/city/${name}`}>Детальніше</Link>
  </div>
);
export default CityCard;