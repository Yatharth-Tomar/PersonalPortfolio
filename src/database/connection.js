const mongoose = require("mongoose");

const connection = async ()=>{
  try{
    const mongC = await mongoose.connect("mongodb://0.0.0.0:27017/portfolioMembers",()=>{
      console.log("Connected to database :)");
    })
  }catch(e){
    console.log(e);

  }

}
module.exports = connection();