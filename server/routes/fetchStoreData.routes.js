const router = require("express").Router();

const fetchAndStoreData = require("../controllers/fetchAndStore.controllers");

router.get("/data", fetchAndStoreData);

module.exports = router;
