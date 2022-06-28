describe('score board endpoints', () => {
	let api;

	beforeEach(async () => {
		await resetTestDB();
	});

	beforeAll(async () => {
		api = app.listen(5000, () =>
			console.log('Test server running on port 5000')
		);
	});

	afterAll(async () => {
		console.log('Gracefully stopping test server');
		await api.close();
	});

  test("should return a list of all scores", async () => {
    const res = await requestAnimationFrame(api).get('/scoreboard')
    expect(res.body).toHaveLength(2)
  }
});
