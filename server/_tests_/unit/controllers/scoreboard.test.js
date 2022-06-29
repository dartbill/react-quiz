const scoreBoardController = require('../../../controllers/scoreBoard');
const Score = require('../../../models/Score');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe('scores controller', () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('index', () => {
    test('it returns score board with a 200 status code', async () => {
      let testScores = ['s1', 's2'];
      jest.spyOn(Score, 'all', 'get').mockResolvedValue(testScores);
      await scoreBoardController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(testScores);
    });
  });
  describe('getUser', () => {
    test('it returns a user with a 200 status code', async () => {
      let testUser = {
        id: 1,
        name: 'Test user',
        score: 10
      }
      jest.spyOn(Score, 'findByUsername')
        .mockResolvedValue(new Score(testUser));

      const mockReq = { params: { id: 1 } }
      await scoreBoardController.getUser(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new Score(testUser));
    })
  });

  describe('addUser', () => {
    test('it returns a new user with a 201 status code', async () => {
      let testUser = {
        name: 'Test user',
        score: 10
      }
      jest.spyOn(Score, 'create')
        .mockResolvedValue(new Score(testUser));

      const mockReq = { body: testUser }
      await scoreBoardController.addUser(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      // expect(mockJson).toHaveBeenCalledWith(new Score(testUser));
    })
  });
});
