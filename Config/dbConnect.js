const mongoose = require("mongoose");

const dbURL2 = "mongodb://localhost:27017/gymManagement";

const dbConnect = ()=> {
    mongoose.connect(dbURL2,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connetion is SucessFull");
    })
    .catch(()=>{
        console.log("some Error Occured while making the db connection");
        process.exit(1);
    })
} 

module.exports = dbConnect;


