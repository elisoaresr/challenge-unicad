import { Request, Response } from 'express';
import knex from '../database/connection';


class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    return response.json(items);
  }
}

export default ItemsController;