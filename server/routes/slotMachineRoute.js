const express = require("express");

const { result } = require("../controllers/slotMachineResult");

const router = express.Router();

router.post("/result", result);

module.exports = router;
