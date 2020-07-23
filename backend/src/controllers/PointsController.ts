import { Request, Response } from 'express';
import knex from '../database/connection';

class PointController {
  async create(request: Request, response: Response) {
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
  }
}

export default PointController;