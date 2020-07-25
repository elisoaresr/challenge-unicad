import React from 'react';
import './Main.css';

import Header from './Header';

const Main = (props: any) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="content">
        Conteúdo
      </main>
    </React.Fragment>
  );
}

export default Main;