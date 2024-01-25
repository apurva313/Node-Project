
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongoDB, {
     useNewUrlParser: true,
         
});

//Get the default connection
var db = mongoose.connection;

db.on("connected",()=>{
    console.log("Connected to MongoDB Server!")
})

db.on("error",()=>{
    console.error("Error in MongoDB Server!")
})

db.on("disconnected",()=>{
    console.log("MongoDB Server Disconnected!")
})

module.exports=db;