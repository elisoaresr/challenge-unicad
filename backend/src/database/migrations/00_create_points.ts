import knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.date('date').notNullable();
    table.string('up').notNullable();
    table.string('down').notNullable();
    
  });
}


export async function down(knex: knex) {
  return knex.schema.dropTable('points');
}