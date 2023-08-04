import express from 'express'
import connection from './database/db.js';
import dotenv from 'dotenv'
import defaultData from './default.js';
import router from './Routes/Routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url';

// rest object
const app = express();

// dotenv config
dotenv.config()

app.use(cors())

app.use(bodyParser.json({ extended:true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router)

// static files

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

const PORT = process.env.PORT || 8080;

// Mongo db Connection
connection();

app.listen(PORT,()=>{console.log(`server is running on ${PORT} fine`)})
defaultData();


// payment gateway
export let paymentMerchantKey =  process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID
paytmParams['TXN_AMOUNT'] = '100'
paytmParams['CALLBACK_URL'] = 'http://localhost:8080/callback'
paytmParams['EMAIL'] = 'manojmishra98feb@gmail.com'
paytmParams['MOBILE_NO'] = '7377340164'