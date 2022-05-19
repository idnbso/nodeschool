const util = require("util");
const mongo = require("mongodb").MongoClient;

const displayPricesAveragePriceBySize = async (
  databaseName,
  collectionName,
  size
) => {
  const client = await getMongoClientConnection();

  const db = client.db(databaseName);

  const results = await db
    .collection(collectionName)
    .aggregate([
      { $match: { size } },
      {
        $group: {
          _id: "$size",
          average: { $avg: "$price" },
        },
      },
    ])
    .toArray();

  const { average } = results[0];
  console.log(average.toFixed(2));
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

const databaseName = "learnyoumongo";
const collectionName = "prices";
const size = process.argv[2];
displayPricesAveragePriceBySize(databaseName, collectionName, size);
