const mongoose =require('mongoose')
const connectionString = process.env.DBCONNECTION

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB Connection Successfull");
    
}).catch((err)=>{
console.log("MongoDB connection Failed");
console.log(err);
})

