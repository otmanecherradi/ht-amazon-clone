const { Service } = require('feathers-knex');

exports.Ratings = class Ratings extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'ratings'
    });
  }
};
