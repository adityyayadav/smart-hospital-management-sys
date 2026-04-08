const express = require("express");
const router = express.Router();
const { getHospitals, createHospital } = require("../controllers/hospitalController");

router.route("/").get(getHospitals).post(createHospital);

module.exports = router;
