import React from 'react';
import Main from '../../template/Main';

const headerProps = {
  icon: 'map ',
  title: 'Mapa',
  subtitle: 'Ponto de partida, destino e melhor caminho entre eles'
}

const Map = (props: any) => {
  return (
    <Main {...headerProps}>
      <div className="row">
        Recebe um Mapa
    </div>
    </Main>
  );
}

export default Map;