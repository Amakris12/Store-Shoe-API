//Load all items from MongoDB
require('dotenv').config()
const connectDB = require('./db/connect')
const jsonProducts = require('./products.json')
const Product = require('./Models/sneaker')
const start = async(req,res)=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!!')
        process.exit(0)
    }catch(error){
        console.log(error)
    }
}
start()