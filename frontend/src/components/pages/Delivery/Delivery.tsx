import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

import Main from '../../template/Main';
import { runInThisContext } from 'vm';

const headerProps = {
  icon: 'truck ',
  title: 'Entregas',
  subtitle: 'Informações gerais sobre as entregas'
}

interface Item {
  id: number;
  name: string;
  date: Date;
  send: string;
  done: string;
}

const Delivery = (props: any) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('points').then(response => {
      setItems(response.data)
    });
  }, [])

  return (
    <Main {...headerProps}>
      <form>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Envio</th>
            <th>Destino</th>
          </tr>
        </thead>
      </table>
        <ul className="items-grid">
          {items.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.date}</span>
              <span>{item.send}</span>
              <span>{item.done}</span>
            </li>
          ))}
        </ul>
      </form>
    </Main>
  );
}

export default Delivery;