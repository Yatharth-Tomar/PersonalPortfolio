const { default: axios } = require("axios");

exports.homeScreen = (req,res)=>{
 res.render("index");
}
exports.loginPage=(req,res)=>{
 res.render("sign");
}