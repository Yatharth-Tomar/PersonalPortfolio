const express= require("express");
const controller = require("../controller/controller");

const route = express.Router();
const home = require("../services/render");
//rendering
route.get("/",home.homeScreen);
route.get("/sign",home.loginPage)


//api
route.post("/login",controller.finD)
route.post("/register",controller.newMember)




module.exports = route;