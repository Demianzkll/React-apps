import CityCard from '../Reusable_components/CityCard';

const Home = () => {
  const cities = ["Kyiv", "Lviv", "Odesa", "Berlin", "London"];
  return (
    <div>
      <h1>Список міст</h1>
      <div className="grid">
        {cities.map(city => <CityCard key={city} name={city} />)}
      </div>
    </div>
  );
};
export default Home;