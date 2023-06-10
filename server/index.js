import express from 'express'
import connection from './database/db.js';
import dotenv from 'dotenv'
import defaultData from './default.js';
import router from './Routes/Routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';

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