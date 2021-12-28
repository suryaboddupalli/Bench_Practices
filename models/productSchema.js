const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Id:{
        type:String
    },
    Title:{
        type:String
    },
    Image:{
        type:String
    },
    Description:{
        type:String
    },
    Price:{
        type:String
    },
    color:{
        type:String
    },
    Memory:{
        type:String
    },
    FrontCamera:{
        type:String
    },
    RearCamera:{
        type:String
    },
    Display:{
        type:String
    },
    Battery:{
        type:String
    },
    Processor:{
        type:String
    }
})

module.exports = mongoose.model('Products', productSchema)