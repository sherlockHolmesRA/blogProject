const router = require("express").Router();
//const router = require("")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB");

const art = require("../models/articles");
const artModel = mongoose.model("articles", art);

const bcrypt = require("bcrypt");

router.post("/artregister", async(req, res)=>{
    const result = await artModel.create(req.body);
    res.send(result);
})

router.post("/join", async(req, res)=>{
    const result = await artModel(req.body).save();
    res.send(result);
})


router.post("/logArt", async (req, res) => {
    const result = await artModel.findOne({title: req.body.title});
    if(!result){res.send({message:"article not found"})}
    //const token = jwt.sign({data:result},"mypass");
    res.send({message: "OK", article: result});
})

module.exports = router;