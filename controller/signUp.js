const mongoose = require("mongoose");
const User = require("../model/userInfo");

exports.signup = async(req,res)=>{
   try{

        const{ name,email,password } = req.body;
        const existingUser = await User.findOne({email});    

        if(existingUser){
            return res.status(400).json({
                success:false,
                messgae:"user already exists"
            })
        }
        const user = await User.create({
            name,email,password
        })

        return res.status(200).json({
            success:true,
            message:user
        })


   } catch(err){
    
    return res.status(500).json({
        status:false,
        messgae:err,
    })
   }   

}