const express = require("express");
const auth = require("../middleware/auth");

const { signup, login, getUser } = require("../controllers/auth.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", auth, getUser);

module.exports = router;
