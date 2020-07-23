import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';

const routes = express.Router()
const pointsController = new PointsController;


routes.get('/points', async (request, response) => {
  const items = await knex('items').select('*');
    return response.json(items);
});

routes.post('/points', pointsController.create);

export default routes;