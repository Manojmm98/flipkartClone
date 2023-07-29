import express from 'express'
import {  UserLogin, UserSignup } from '../Controler/user-controler.js';
import { getProductById, getProducts } from '../Controler/product-controler.js';
import {paytmPaymentGateway, paytmResponse} from '../Controler/payment-controler.js';


const router = express.Router()

router.post('/signup',UserSignup)
router.post('/login',UserLogin)

router.get('/products',getProducts)
router.get('/products/:id',getProductById)
router.post('/payment',paytmPaymentGateway)
router.post('/callback',paytmResponse)

export default router;