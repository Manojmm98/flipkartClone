import { products } from "./Assets/data.js"
import product from "./model/product-schema.js";


const defaultData = async()=>{
   try{
       await product.insertMany(products);
       console.log('data pushed to db sucessfully');
   }
   catch(error){
       console.log('Error while connecting',error.message);
   }

}

export default defaultData;