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



// const mongoose = require("mongoose");
// const dbURL = "mongodb+srv://shubhamnikamsn007:R5YF6gMe4D6KLXn2@cluster0.v5qwzji.mongodb.net/shubhamDB";
// const dbURL2 = "mongodb://localhost:27017/auth";
// require("dotenv").config();

// const dbConnect =()=>{
//     mongoose.connect(dbURL2,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true        
//     })
//     .then(()=>{
//         console.log("db connection is successfull");
//     })
//     .catch(()=>{
//         console.log("unable to connect with db please try later");
//         process.exit(1);
//     })
// }

// module.exports = dbConnect;