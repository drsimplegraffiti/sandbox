const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
     address:{
         type:String,
         required:true
     }
})

// Exports schemas
module.exports = mongoose.model("Customer", customerSchema);