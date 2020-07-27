import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../assets/unicad-logo.svg';

const Header = (props: any) => {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <Link to="/" className="logo">
        <img src={logo} alt="Unicad" />
      </Link>
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </header>
  );
}

export default Header;