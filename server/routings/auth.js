const router = require("express").Router();
//const router = require("")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB");
const User = require("../models/user")
const userModel = mongoose.model("users", User);

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.post("/register", async(req, res)=>{
    const result = await userModel.create(req.body);
    res.send(result);
})

router.post("/login", async (req, res) => {
    const result = await userModel.findOne({email: req.body.email, username: req.body.username} );
    if(!result){res.send({message:"user not found"})}
    if (result.password !== req.body.password) {res.send({message: "wrong pass"})}
    const token = jwt.sign({data:result},"mypass");
    res.send({message: "OK",token:token, user: result});
})

module.exports = router;

/*
router.post("/artList", async(req, res)=>{
    const result = await artModel.create(req.body);
    res.send(result);
})
bcrypt.hash('myPassword', 10, (err, hash) =>{
    // Store hash in database
});
*/