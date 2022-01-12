const mongoose = require('mongoose')

const connectionString = "mongodb+srv://amakris12:beartron12@shoes.qwes4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = (url)=>{
return mongoose
    .connect(connectionString)
    .then(()=>(console.log('CONNECTED TO MONGODB SUCCESSFUL')))
    .catch((err)=>(console.log(err)))
}

module.exports = connectDB
