const app = require('../../src/app');

describe('\'ratings\' service', () => {
  it('registered the service', () => {
    const service = app.service('ratings');
    expect(service).toBeTruthy();
  });
});
