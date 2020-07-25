import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <a href="#/">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="#/delivery">
          <i className="fa fa-paper-plane"></i> Entregas
        </a>
        <a href="#/map">
          <i className="fa fa-map"></i> Mapa
        </a>
      </nav>
    </aside>
  );
}

export default Nav;