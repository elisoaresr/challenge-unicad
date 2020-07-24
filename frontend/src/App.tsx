import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Nav from './components/template/Nav';
import Main from './components/template/Main';
import Footer from './components/template/Footer';

export default (props: any) =>
  <BrowserRouter>
    <div className="app">
      <Main />
      <Nav />
      <Footer />
    </div>
  </BrowserRouter>