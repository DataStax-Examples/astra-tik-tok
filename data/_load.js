require("dotenv").config();
const {
  getCollection,
  getAstraClient,
} = require("../functions/utils/astraClient");

const posts = require("./posts.json");

if (!process.env.ASTRA_DB_APPLICATION_TOKEN) {
  console.error(
    `A .env file with your ASTRA_DB_APPLICATION_TOKEN is required.`
  );
  process.exit(1);
}

(async () => {
  const collection = await getCollection();

  // if data exists, don't proceed
  try {
    const doc = await collection.get("0");
    if (doc) {
      process.exit();
    }
  } catch (e) {
    console.error(e);
  }

  try {
    const astraClient = await getAstraClient();
    const namespace = astraClient.namespace("sag_tiktok");
    await namespace.createCollection("sag_tiktok_posts");
    console.log(`Created the sag_tiktok_posts collection`);
  } catch (e) {}

  try {
    console.log(`Loading data for the sag_tiktok_posts collection`);
    const res = await collection.batch(posts, "id");
    console.log(res);
    console.log(`Data loaded for sag_tiktok_posts`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
