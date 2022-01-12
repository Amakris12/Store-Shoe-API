const mongoose = require('mongoose')

const ShoeSchema = new mongoose.Schema({
    Brand:{
        type: String,
        required:[true,"must provide Brand"],
        enum: {      
            values: ['Jordan','Nike','Adidas','Under Armor','Converse','Vans'],      
            message: '{VALUE} is not supported',   
        },
    },
    Shoe:{
        type: String,
        required:[true,"must provide Shoe"],
        trim:true,
        maxlength:[50,'Cannont reach this limit'] 
    },
    Rating:{
        type:Number,
        required:[true,"must provide Number Rating"],
        maxlength:[2,'Cannont reach this limit'],
    },
    Type:{
        type: String,
        required:[true,"must provide a Type"],
        enum: {      
            values: ['Athletic','Boat','Hybrid','Dress','Sandals','Boots'],      
            message: '{VALUE} is not supported',   
        },
    },
    Price:{
        type: String,
        required:[true,"must provide Price"],
        maxlength:[4,'Cannont reach this limit'], 
    },
    Stock:{
        type: Boolean,
        default:true,
    }
})
module.exports = mongoose.model('Shoes',ShoeSchema)