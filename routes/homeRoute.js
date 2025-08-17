const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

const homeController = new HomeController();

router.get("/", homeController.loginView);

router.post("/login", homeController.login);

module.exports = router;