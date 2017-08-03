export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v29',
      message: process.env.MESSAGE
    })
  });
};
