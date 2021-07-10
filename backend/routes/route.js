const express = require("express");
const router = express.Router();
const BoardMessege = require("../models/BoardMessege");
const LoginInfor = require("../models/Login"); 

router.get("/", async (req, res) => {
    const profiles = await Profile.find();
    res.json(profiles);
});