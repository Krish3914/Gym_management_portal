const express = require("mongoose");

const userInfo = new express.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    dateOfBirth:{
        type:Date,
        required:true,
        // default:Date.now(),
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = express.model("user",userInfo);
