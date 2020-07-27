import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './components/template/Nav';
import Home from './components/pages/Home/Home';
import Main from './components/template/Main';
import Footer from './components/template/Footer';


export default (props: any) =>
  <BrowserRouter>
    <div className="app">
      <Main icon="home" title="Início"
        subtitle="Sistema de entrega de mercadorias para clientes"/>
      <Home />  
      <Nav />
      <Footer />
    </div>
  </BrowserRouter>