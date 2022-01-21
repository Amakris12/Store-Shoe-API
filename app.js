require('./db/connect')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const shoes = require('./routes/shoes')
require('dotenv').config
const error = require('./middleware/error-handler')
const notFound = require('./middleware/notFound')

app.use(express.json())
app.use('/api/v1/shoes',shoes)
app.use(express.static('public'))
app.use(error)
app.use(notFound)


const port = process.env.PORT || 3000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port} `))
    }catch(error){
        console.log(error)
    }
}
start()