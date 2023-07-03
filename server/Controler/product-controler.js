import product from "../model/product-schema.js";

export const getProducts=async(Request,response) =>{

    try{

        const products = await product.find({})

        response.status(200).json(products);

    }
    catch(error){
         response.status.json({message:error.message});
    }

}