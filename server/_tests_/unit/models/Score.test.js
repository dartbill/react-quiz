const Score = require('../../../models/Score');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Score', () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('all', () => {
    test('it resolves with scores on successful db query', async () => {
      jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [{}, {}] });
      const all = await Score.all;
      expect(all).toHaveLength(2);
    });
  });
});