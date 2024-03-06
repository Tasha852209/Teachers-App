import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <button type="button">Log in</button>
          <button type="button">Registration</button>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
