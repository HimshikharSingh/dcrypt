const router = require("express").Router();

const fetchData = require("../controllers/fetchData.controllers");

router.get("/data", fetchData);

module.exports = router;
