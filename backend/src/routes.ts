import express from 'express';

const routes = express.Router()

routes.get('/', (request, response) => {
    console.log('Backend executando...');
      return response.json({ message: "Hello World!" });  
  });

export default routes;