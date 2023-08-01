import paytmchecksum from "../paytm/PaytmChecksum.js"
import { paymentMerchantKey,paytmParams } from "../server.js"
import formidable from "formidable";
import https from 'https'


export const paytmPaymentGateway= async (request,response)=>{
    try{
     let PaytmChecksum =  await paytmchecksum.generateSignature(paytmParams,paymentMerchantKey)

     let params = {
        ...paytmParams,
        'CHECKSUMHASH' : PaytmChecksum
     }

     response.status(200).json(params);
    }
    catch(error){
       response.status(500).json({error:error.message})
    }
}

export const paytmResponse = async (request,response) =>{
   const form = formidable.IncomingForm();
   // get checksum details
   let paytmChecksum = request.body.CHECKSUMHASH;
   delete request.body.CHECKSUMHASH;

   // verify signature

   let isverifySign = paytmchecksum.verifySignature(request.body,paytmChecksum,paymentMerchantKey)

   if(isverifySign){

      let paytmparams = {};
      paytmparams['MID'] = request.body.MID;
      paytmparams['ORDER_ID'] = request.body.ORDER_ID;

      paytmchecksum.generateSignature(paytmparams,paymentMerchantKey).then(function(){
         paytmparams['CHECKSUMHASH'] = checksum;

         let post_data = json.stringify(paytmparams);

         let options = {
            hostname : 'securegw-stage.paytm.in/',
            port : 443,
            path : 'order/status',
            headers : {
               'Content-Type': 'application/json',
               'Content-Length' : post_data.length
            }
         }

         let res = "";
         let post_req = https.request(options,function(post_res){
             post_res.on('data',function(chunk){
               res+=chunk;
             })

           post_res.on('end',function(){
              let result = json.parse(res)
              response.redirect('')
           })  
         })


        post_req.write(post_data);
        post_req.end();

      })

   }
   else{
      console.log('Checksum Mismatched');
   }

}
