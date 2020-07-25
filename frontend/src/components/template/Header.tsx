import React from 'react';
import './Header.css';

import logo from '../assets/unicad-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Unicad" />
      </div>
    </header>
  );
}

export default Header;