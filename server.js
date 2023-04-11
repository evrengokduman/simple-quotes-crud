//declare variables

const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const todotask = require("./models/todotask");
require("dotenv").config();

//set middleware to use ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
//this helps validate passing data back and forth
app.use(express.urlencoded({ extended: true })); //if we set this to false it wouldn't let us send a json object with an array

/* I did lots of things here. Mongoose callback here was deprecated so, I got the promise coming from db and the only way I could log was connect - then - catch - async try catch can be used as well

async function connect() {
  try {
    mongoose.connect(url);
    console.log("connected to dbase");
  } catch (error) {
    console.log(error);
  }
} 
connect()
*/

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to dbase");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", async (req, res) => {
  try {
    todotask.find({}, (err, tasks) => {
      res.render("index.ejs", { todoTasks: task });
    });
  } catch (err) {}
});

Is this working?
