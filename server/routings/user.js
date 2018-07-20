const router = require("express").Router();
const mongoose = require('mongoose');

const User = require("../models/user");
mongoose.connect("mongodb://localhost:27017/blogDB");

const userModel = mongoose.model("users", User);

router.get("/all", async(req, res) => {
    const result = await userModel.find().exec();
    res.send(result);
});
module.exports = router;