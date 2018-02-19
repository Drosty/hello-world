import * as hello from '../hello';

test('hello', async () => {
  const event = {};
  const context = {};
  const expected = {
    statusCode: 200,
    body: 'Hello World!',
  };

  function callback(error, result) {
    expect(result).toEqual(expected);
  }

  expect.assertions(1);
  await hello.main(event, context, callback);
});
