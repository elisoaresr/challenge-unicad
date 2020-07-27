import React from 'react';

import './styles.css';

import Main from '../../template/Main';

const headerProps = {
  icon: 'truck ',
  title: 'Entregas',
  subtitle: 'Informações gerais sobre as entregas'
}

const Delivery = (props: any) => {
  return (
    <Main {...headerProps}>
      <div className="row">
        Lista de entregas
    </div>
    </Main>
  );
}

export default Delivery;