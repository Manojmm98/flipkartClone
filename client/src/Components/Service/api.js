import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:8080'
export const AuthnticateUserSignup = async(data) => {
    
    try {
       return await axios.post(`${URL}/signup`,data) 
    }
    catch(error){
        console.log('Error while sign up',error.message);
    }

}
export const AuthnticateUserLogin = async(data) => {
    
    try {
       return await axios.post(`${URL}/login`,data) 
    }
    catch(error){
        console.log('Error while login ',error.message);
        return error.response;
    }

}