//declare variables

const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
require("dotenv").config();
//add model variable

//set middleware to use ejs
app.set("viewengine", "ejs");
app.use(express.static(public));
//this helps validate passing right data back and forth
app.use(express.urlencoded({ extenden: true })); //if we set this to false it wouldn't let us send a json object with an array

app.listen("/", (req, res) => {});
