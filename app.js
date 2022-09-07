const express = require("express");
const route = require("./src/router/route");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const conn = require("./src/database/connection");
const Model = require("./src/models/schema");


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(route);

//setting up view engine
app.set("view engine","hbs");
app.set("views","./src/views");
hbs.registerPartials("./src/views/partials");

//using static public files
app.use(express.static("public"));




app.listen(port,()=>{
 console.log("Server is running on server port 3000");
})