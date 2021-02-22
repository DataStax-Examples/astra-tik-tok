const { getCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
  const users = await getCollection();
  const body = JSON.parse(event.body);

  try {
    users.update(body.userId, body.data);
    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
