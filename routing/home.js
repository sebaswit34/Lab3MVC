const path = require("path");

const express = require("express");

const router = express.Router();

const { MENU_LINKS } = require("../constants/navigation");

router.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Strona Główna",
        menuLinks: MENU_LINKS,
        activeLinkPath: req.path
    });
});

module.exports = router;
