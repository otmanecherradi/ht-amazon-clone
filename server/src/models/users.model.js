/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  /**
   * @type {import('knex').Knex}
   */
  const db = app.get('knexClient');
  const tableName = 'users';

  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments('id');

          table.string('email').unique();
          table.string('password');

          table.string('name').notNullable();
          table.string('address').nullable();
          table.string('phone').nullable();

          table.text('img_url').nullable();

          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};
