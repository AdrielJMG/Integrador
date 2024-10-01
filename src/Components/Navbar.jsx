import React, { useContext } from 'react';
import { ContextGlobal } from './Context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li>
          <button onClick={changeTheme}>Cambiar tema</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;