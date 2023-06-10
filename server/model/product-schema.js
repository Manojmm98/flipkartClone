import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   
    id:{ type: String, required: true, unique: true },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String

})

const product = mongoose.model('product',productSchema);

export default product;