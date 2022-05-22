/* eslint-disable no-console */

// ratings-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  /**
   * @type {import('knex').Knex}
   */
  const db = app.get('knexClient');
  const tableName = 'ratings';

  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments('id');

          table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index();
          table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').index();

          table.integer('rating');
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};
