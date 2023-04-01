const { Client } = require("pg");

const DB_URL = process.env.DB_URL;
// console.log(DB_URL);

const client = new Client({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to ElephantSQL database");
  }
});

module.exports = client;
