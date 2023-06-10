import express from 'express'
import {  UserLogin, UserSignup } from '../Controler/user-controler.js';


const router = express.Router()

router.post('/signup',UserSignup)
router.post('/login',UserLogin)

export default router;