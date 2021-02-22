const faker = require("faker");
const { getCollection } = require("./utils/astraClient");

let id = faker.random.uuid();

exports.handler = async function (event) {
  const users = await getCollection();
  try {
    const user = await users.create(id, event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
