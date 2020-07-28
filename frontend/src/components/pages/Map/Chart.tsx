import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Main from '../../template/Main';

const headerProps = {
  icon: 'map ',
  title: 'Mapa',
  subtitle: 'Ponto de partida, destino e melhor caminho entre eles'
}

const Home = (props: any) => {
  return (
    <Main {...headerProps}>
        <Map center={[-22.7261835, -43.6375562]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
    </Main>
  );
}

export default Home;