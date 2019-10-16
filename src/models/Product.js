const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    Body: {
        type: String, 
        required: true
    },
    nCurtidas: {
        type: Number, 
        required: true
    },
    Autor: {
        type: String, 
        required: true
    }
})

mongoose.model("Product", ProductSchema)