const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    customerId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
     initialDate:{
         type:String,
         required:true
     },
     deliveryDate:{
         type:String,
         required:true
     }
})

// Exports schemas
module.exports = mongoose.model("Order", orderSchema);