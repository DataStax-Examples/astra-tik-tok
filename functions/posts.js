const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
  const users = await getCollection();
  try {
    const res = await users.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
