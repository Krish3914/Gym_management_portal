const express = require("express");
const router =  express.Router();

const {signup}  = require("../controller/signUp");

router.post("/signup", signup);
// router.post("/login", {login});

module.exports = router;