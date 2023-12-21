const express = require("express");
const app = express();

const PORT = 3000 || 4000;
app.use( express.json() );

const dbConnect = require("./Config/dbConnect");
dbConnect();

const user = require("./routes/user");
app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`app in running at port ${PORT}`);
})

app.get("/",(req,res)=>{
    return res.send("<h1>App run successfully</h1>");
})


