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

  describe("findByusername", () => {
    test("it resolves with user on successful db query", async () => {
      let userData = {
        name: "karma",
        score: 10,
      };

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });
      const result = await Score.findByUsername("karma");
      expect(result).toBeInstanceOf(Score);
    });
  });

  describe('create', () => {
    test('it resolves with user on successful db query', async () => {
      let userData = { name: 'Test user', score: 3 }
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [{ ...userData, id: 1 }] });
      const result = await Score.create(userData);
      expect(result).toHaveProperty('id')
    })
  });

});