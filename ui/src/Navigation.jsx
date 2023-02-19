import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/leaderboard">LeaderBoard</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/rewards">Rewards</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/makepayment">Make Payment</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;