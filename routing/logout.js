const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
    response.sendFile(path.join(__dirname, "../views", "logout.html"));
});

module.exports = router;
