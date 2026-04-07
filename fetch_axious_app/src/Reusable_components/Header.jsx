import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <Link replace to="/">Головна</Link>
      <Link replace to="/favorites">Обране</Link>
    </nav>
  </header>
);
export default Header;