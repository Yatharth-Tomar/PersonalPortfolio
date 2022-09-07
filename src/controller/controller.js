const Collection = require("../models/schema");

exports.newMember = async(req,res)=>{

 try{

  const postt = await new Collection({
  name:req.body.name,
  email:req.body.email,
  mobile:req.body.mobile,
  password:req.body.password
 })
 console.log("Document Created");
  const save = await postt.save();
  console.log("Account created successfully");

 
  res.render("index",{message:"Account created successfully",class:"alert"});
 

 }catch(e){
  console.log(e);
 }


 //.express-session  connect-flas 
 
 
}


exports.finD = async(req,res)=>{

try{
 const findOne = await Collection.findOne({email:req.body.email})
  if(req.body.password==findOne.password){
   res.render("index",{message:"Welcome "+findOne.name,class:"alert"})
  }
  else{
   res.render("index",{message:"Wrong Password!",class:"alertDanger"})
  }
 
 }catch(e){
 console.log(e);
 res.render("index",{message:"Sorry Email do not exists",class:"alertDanger"})
}

 }