import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/Routes';
import './App.css';

import Nav from './components/template/Nav';
import Footer from './components/template/Footer';


export default (props: any) =>
  <BrowserRouter>
    <div className="app">
      <Routes />
      <Nav />
      <Footer />
    </div>
  </BrowserRouter>