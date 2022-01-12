const Shoes = require('../models/sneaker')
const getAllShoes = async (req,res)=>{
    try{
        const shoe = await Shoes.find({})
        res.status(201).json({shoe})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const updateShoe = async(req, res) => {
    try{
        const {id} = req.params
        const newShoe = req.body;
        const shoe = await Shoes.findOneAndUpdate({_id: id}, newShoe)
        // console.log(newShoe)
        res.status(201).json({shoe})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteShoe = async (req, res) => {
    try{
        const {id: shoeID} = req.params
        const shoe = await Shoes.findOneAndDelete({_id:shoeID})
        res.status(201).json({shoe})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const createShoe = async (req,res)=>{
    try{
        const shoe = await Shoes.create(req.body)
        res.status(201).json({shoe})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const singleShoe = async (req, res) => {
    try{
        const {id} = req.params
        console.log(id)
        const shoe = await Shoes.findById(id).exec();
        res.status(201).json({shoe})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllShoes,
    updateShoe,
    deleteShoe,
    createShoe,
    singleShoe
}