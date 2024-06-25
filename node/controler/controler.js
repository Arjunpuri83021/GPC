const RegModel=require('../models/RegModel')


exports.reg=async(req,res)=>{
    const {Name,Email,Number,Password}=req.body
 
    const record= new RegModel({
         name:Name,
     email:Email,
     number:Number,
     password:Password
     })
 
     record.save()
 
     res.send(record)
 
 }





exports.regFind = async(req,res)=>{
    const record=await RegModel.find()
    res.send(record)
}