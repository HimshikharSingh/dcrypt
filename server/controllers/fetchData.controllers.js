const database = require("../config/db");

const getData = async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM top_10_table");
    console.log("Data from database: ", result);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getData;
