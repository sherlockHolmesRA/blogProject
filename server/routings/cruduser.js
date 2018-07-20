const router = require("express").Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB");
const User = require("../models/user")
const userModel = mongoose.model("users", User);

router.post("/insert/:id", async (req,res)=>{
    const result = await userModel.findOneAndUpdate({_id: req.params.id},{ $push: {todos: {desc: req.body.desc, done: req.body.done}}}).exec();
    res.send(result);
})

router.post("/update/:id/:index", async (req,res)=>{
    var index= "todos."+ req.params.index;
    console.log(index);
    const result = await userModel.findOneAndUpdate({_id: req.params.id}, {$set: {[index]: req.body}}).exec();
    res.send("ok");
})

router.post("/delete/:id/:articleId", async (req,res)=>{
    const result = await userModel.findOneAndUpdate({_id: req.params.id}, {$pull: {"userarticles": {_id: req.params.todoId}}}).exec();
    res.send("ok");
})

module.exports = router;