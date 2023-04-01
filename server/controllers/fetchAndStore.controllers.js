const axios = require("axios");
const database = require("../config/db");

const fetchAndStore = async (req, res) => {
  const API_URL = process.env.API_URL;

  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // console.log("Whole data :", data);

    // Extract the top 10 tickers
    const top10Tickers = Object.values(data).slice(0, 10);
    // console.log("Top 10 tickers: ", top10Tickers);

    // Map the tickers to only include the required data
    const mappedData = top10Tickers.map((ticker) => ({
      name: ticker.name,
      last: ticker.last,
      buy: ticker.buy,
      sell: ticker.sell,
      volume: ticker.volume,
      base_unit: ticker.base_unit,
    }));

    console.log("Mapped Data: ", mappedData);

    // Store the data in the database
    await database.query("TRUNCATE TABLE top_10_table");
    const values = mappedData
      .map((ticker) => `('${Object.values(ticker).join("', '")}')`)
      .join(", ");
    await database.query(
      `INSERT INTO top_10_table (name, last, buy, sell, volume, base_unit) VALUES ${values}`
    );

    console.log("Data stored successfully!");
    res.status(201).json({ msg: "Data stored successfully", data: mappedData });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// fetchAndStore();

module.exports = fetchAndStore;
