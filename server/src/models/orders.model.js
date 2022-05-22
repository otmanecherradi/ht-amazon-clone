/* eslint-disable no-console */

// orders-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  /**
   * @type {import('knex').Knex}
   */
  const db = app.get('knexClient');
  const orderTableName = 'orders';
  const orderDetailsTableName = 'order_detail';

  db.schema.hasTable(orderTableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(orderTableName, (table) => {
          table.increments('id');

          table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index();

          table.string('address');

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${orderTableName} table`))
        .catch((e) => console.error(`Error creating ${orderTableName} table`, e));
    }
  });

  db.schema.hasTable(orderDetailsTableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(orderDetailsTableName, (table) => {
          table.increments('id');

          table.integer('order_id').unsigned().references('id').inTable(orderTableName).onDelete('CASCADE').index();
          table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').index();

          table.double('price').notNullable();

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${orderDetailsTableName} table`))
        .catch((e) => console.error(`Error creating ${orderDetailsTableName} table`, e));
    }
  });

  return db;
};
