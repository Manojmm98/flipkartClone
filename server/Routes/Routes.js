import express from 'express'
import {  UserLogin, UserSignup } from '../Controler/user-controler.js';
import { getProducts } from '../Controler/product-controler.js';


const router = express.Router()

router.post('/signup',UserSignup)
router.post('/login',UserLogin)

router.get('/products',getProducts)

export default router;