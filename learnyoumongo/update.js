const util = require("util");
const mongo = require("mongodb").MongoClient;

const updateUser = async (databaseName) => {
  const client = await getMongoClientConnection();

  const db = client.db(databaseName);

  await db.collection("users").updateOne(
    {
      name: "Tina",
    },
    {
      $set: {
        age: 40,
      },
    }
  );

  client.close();
};

const getMongoClientConnection = () => {
  try {
    const url = "mongodb://localhost:27017";
    const connect = util.promisify(mongo.connect);
    return connect(url);
  } catch (err) {
    console.error(err);
  }
};

const databaseName = process.argv[2];
updateUser(databaseName);
