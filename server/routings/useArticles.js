const router = require("express").Router();
const mongoose = require('mongoose');

const art = require("../models/articles");
mongoose.connect("mongodb://localhost:27017/blogDB");

const articleModel = mongoose.model("articles", art);

router.get("/allArt", async(req, res) => {
    const result = await articleModel.find().exec();
    res.send(result);
});

module.exports = router;
/*
router.post("/insert/:id", async (req,res)=>{
    const result = await UserModel.findOneAndUpdate(
        {_id: req.params.id},{ $push: {
             todos: {
                    desc: req.body.desc,
                    done: req.body.done
                }
            }
        }).exec();
   
    res.send(result);
})

router.post("/update/:id/:index", async (req,res)=>{
    var index= "todos."+ req.params.index;
    console.log(index);
    const result = 
    await UserModel.findOneAndUpdate(
        {_id: req.params.id},
         {$set: {
             [index]: req.body}}
             
        ).exec();
   
    res.send("ok");
})

router.post("/delete/:id/:todoId", async (req,res)=>{
    var index=  req.params.index;
    w
    const result = 
    await UserModel.findOneAndUpdate(
        {_id: req.params.id},
         {$pull: {
             "todos": {_id: req.params.todoId}}}
             
        ).exec();
   
    res.send("ok");
})
*/


/* 
You can use MongoDB DBRefs where a document contains references from different collections.
There are three fields in DBRefs −
$ref − This field specifies the collection of the referenced document
$id − This field specifies the _id field of the referenced document
$db − This is an optional field and contains the name of the database in which the referenced document lies
*/