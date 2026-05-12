const express = require("express");
const router = express.Router();

const { getAIResponse } = require("../controllers/chatController");

router.post("/", getAIResponse);

module.exports = router;
