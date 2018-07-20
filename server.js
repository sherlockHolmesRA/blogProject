const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(bodyparser.json());

// const user = require("./server/routings/user")
// app.use("/users",user);

// const art = require("./server/routings/articles")
// app.use("/articles",art);

const auth = require("./server/routings/auth")
app.use("/auth",auth);

const artsList = require("./server/routings/listArticles")
app.use("/arts",artsList);


const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));