import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';

import api from '../../services/api';
import Main from '../../template/Main';

const headerProps = {
  icon: 'home',
  title: 'Início',
  subtitle: "Sistema de entrega de mercadorias para clientes"
}

const Home = (props: any) => {
  const [item, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    send: '',
    done: ''
  });

  useEffect(() => {
    api.get('points').then(response => {
      console.log(response);
    });
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, date, send, done } = formData

    const data = {
      name,
      date,
      send,
      done
    };
    console.log(data);
  }

  return (
    <Main {...headerProps}>
      <div className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Nome</label>
              <input type="text" className="form-control"
                name="name" placeholder="Digite o nome"
                onChange={handleInputChange} />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Data de Entrega</label>
              <input type="date" className="form-control"
                name="date" placeholder="Digite a data de Entrega"
                onChange={handleInputChange} />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Ponto de Partida</label>
              <input type="text" className="form-control"
                name="send" placeholder="Digite o endereço"
                onChange={handleInputChange} />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Ponto de destino</label>
              <input type="text" className="form-control"
                name="done" placeholder="Digite o endereço"
                onChange={handleInputChange} />
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary">
              Salvar
            </button>

            <button className="btn btn-secondary ml-2">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;