import React from 'react';
import './Main.css';

import Header from './Header';

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="content">
        Conteúdo
      </main>
    </React.Fragment>
  );
}

export default Main;