import express from 'express'
import connection from './database/db.js';
import dotenv from 'dotenv'
import defaultData from './default.js';
import router from './Routes/Routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid'

const app = express();

dotenv.config()

app.use(cors())
app.use(bodyParser.json({ extended:true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router)

const PORT = 8080;

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

connection(USERNAME,PASSWORD);
app.listen(PORT,()=>{console.log(`server is running on ${PORT} fine`)})
defaultData();

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

// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID,
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
// paytmParams['ORDER_ID'] = uuid(),
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
// paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
// paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
// paytmParams['MOBILE_NO'] = '1234567852'

