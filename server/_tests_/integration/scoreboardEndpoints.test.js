describe('score board endpoints', () => {
  let api;

  beforeEach(async () => {
    await resetTestDB();
  });

  beforeAll(async () => {
    api = app.listen(8000, () =>
      console.log('Test server running on port 5000')
    );
  });

  afterAll(async () => {
    console.log('Gracefully stopping test server');
    await api.close();
  });
  it('should return a list of all users in database', async () => {
    const res = await request(api).get('/scoreboard')
    expect(res.body).toHaveLength(2)
  });

  it('should return a list of books by a specific author', async () => {
    const res = await request(api).get('/scoreboard/june');
    // expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBe(1);
    expect(res.body.name).toBe('june');
    expect(res.body.score).toBe(10);
  })


  it('should create a new user', async () => {
    const res = await request(api)
      .post('/scoreboard/new')
      .send({
        name: 'Maddy',
        score: 30
      })
    // expect(res.statusCode).toEqual(201);
    // expect(res.body).toHaveProperty("id");
    // console.log(res);
    const authRes = await request(api).get('/scoreboard/maddy');
    // console.log(authRes);
    // expect(authRes.statusCode).toEqual(200);
    // expect(res.body.id).toBe(3);
    expect(res.body.name).toBe('maddy');
    expect(res.body.score).toBe(30);
  });

});