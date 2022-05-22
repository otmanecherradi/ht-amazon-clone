/* eslint-disable no-console */

// products-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  /**
   * @type {import('knex').Knex}
   */
  const db = app.get('knexClient');
  const productTableName = 'products';
  const productImageTableName = 'product_images';

  db.schema.hasTable(productTableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(productTableName, (table) => {
          table.increments('id');

          table.string('name').notNullable();
          table.string('slug').notNullable();

          table.text('description').nullable();

          table.double('price').notNullable();
          table.double('price_old').nullable();

          table.text('img_url').nullable();

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${productTableName} table`))
        .catch((e) => console.error(`Error creating ${productTableName} table`, e));
    }
  });

  db.schema.hasTable(productImageTableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(productImageTableName, (table) => {
          table.increments('id');

          table.integer('product_id').unsigned().references('id').inTable(productTableName).onDelete('CASCADE').index();

          table.text('img_url').nullable();

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${productImageTableName} table`))
        .catch((e) => console.error(`Error creating ${productImageTableName} table`, e));
    }
  });

  return db;
};
