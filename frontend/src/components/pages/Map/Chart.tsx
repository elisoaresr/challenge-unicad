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
      <form>

      </form>
    </Main>
  );
}

export default Map;