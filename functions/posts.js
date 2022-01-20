const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
  const users = await getCollection();
  try {
    const res = await users.find({});
    const posts = res.data;
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(posts).map((i) => posts[i])),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
