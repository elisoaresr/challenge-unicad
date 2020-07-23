import express from 'express';
import knex from './database/connection';

const routes = express.Router()

routes.get('/points', async (request, response) => {
  const items = await knex('items').select('*');

  return response.json(items);
});

routes.post('/points', async (request, response) => {
  const {
    name,
    date,
    send,
    done
  } = request.body;

 await knex('items').insert({
    name,
    date,
    send,
    done
  });

  return response.json({ success: true })

});

export default routes;