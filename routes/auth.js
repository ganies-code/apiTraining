import express from 'express';
import bcrypt from 'bcrypt'

import userSChema from '../model/UserSchema.js'

const route = express.Router();

// get

route.get('/', (req,res) => {
    res.status(200).json({message:"Hello express"})
})

// signup

route.post('/signup', (req,res) => {
    const {fname,lname,email,password} = req.body;
    if(!fname || !lname || !email || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    userSChema.findOne({email})
    .then(saveduser => {
        if(saveduser){
            return res.status(422).json({error:"Email already in use"})
        }
        bcrypt.hash(password,12)
        .then(hash => {
            userSChema.create({fname,lname,email,password:hash}, (error,data) => {
                if(error){
                    return res.status(422).json({error:"Please try again"})
                }
                else{
                    return res.status(201).json({message:"Saved Successfully"})
                }
            })
        })

     
    })
  
       

})

// login
route.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Email or Password is incorrect !" })
    }
    userSchema.findOne({ email })
        .then(saveduser => {
            if (!saveduser) {
                return res.json({ error: "Invalid email or password" })
            }
            bcrypt.compare(password, saveduser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // return res.send("Signed in")
                        res.json({ message: "Signin successful!" })
                    }
                    else {
                        return res.json({ error: "Invalid email or password" })
                    }
                })
        })
})



export default route;