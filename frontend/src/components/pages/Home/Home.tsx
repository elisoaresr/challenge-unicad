import React from 'react';
import Main from '../../template/Main';

const headerProps = {
  icon: 'home',
  title: 'Início',
  subtitle: "Sistema de entrega de mercadorias para clientes"
}

const Home = (props: any) => {
  return (
    <Main {...headerProps}>
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Nome</label>
              <input type="text" className="form-control"
                name="name" placeholder="Digite o nome" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Data de Entrega</label>
              <input type="date" className="form-control"
                name="name" placeholder="Digite a data de Entrega" />
            </div>
          </div>


          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Ponto de Partida</label>
              <input type="text" className="form-control"
                name="name" placeholder="Digite o endereço" />
            </div>
          </div>


          <div className="col-12 col-md-6">
            <div className="form group">
              <label>Ponto de destino</label>
              <input type="text" className="form-control"
                name="name" placeholder="Digite o endereço" />
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