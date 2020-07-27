import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/delivery">
          <i className="fa fa-paper-plane"></i> Entregas
        </Link>
        <Link to="/chart">
          <i className="fa fa-map"></i> Mapa
        </Link>
      </nav>
    </aside>
  );
}

export default Nav;