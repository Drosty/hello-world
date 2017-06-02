import * as hello from '../controllers/hello';

test('hello', async () => {
  const event = {};
  const context = {};
  const expected = {
    statusCode: 200,
    body: JSON.stringify({version: 'v3'}),
  };

  function callback(error, result) {
    expect(result).toEqual(expected);
  }

  expect.assertions(1);
  await hello.main(event, context, callback);
});
