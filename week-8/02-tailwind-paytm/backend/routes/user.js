const express = require('express');
const { User, Account } = require('../db');
const jwt = require("jsonwebtoken");
const zod = require('zod');
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');
const router = express.Router();

const userValidation = zod.object({
    username : zod.string().min(3).max(30).trim(),
    password : zod.string().min(3),
    firstname : zod.string().trim().max(30),
    lastname : zod.string().trim().max(30),
})

const updateBody = zod.object({
    password : zod.string().min(3).optional(),
    firstname : zod.string().trim().max(30).optional(),
    lastname : zod.string().trim().max(30).optional(),
}).strict();

router.post('/signup', async(req, res)=>{

    const userDataCheck = await userValidation.safeParse(req.body)
    console.log(userDataCheck);
    if(!userDataCheck.success){
        return res.json({
            msg : "fail"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })
    if(existingUser){
        return res.json({
            msg : "Email already taken / Incorrect inputs"
        })
    }

    // const userName = (req.body.username)?.trim();
    const user = await User.create(req.body)
    const userId = user._id;
    const token = jwt.sign({userId}, JWT_SECRET)

    const account = await Account.create({
        userId : userId,
        balance :  Math.floor(1+ Math.random() *10000)
    })
    console.log(account.balance)
    res.json({
        msg : "user created successfully",
        token
    })

    
})

const signinValidation = zod.object({
    username : zod.string().min(3).max(30).trim(),
    password : zod.string().min(3)
}).strict();

router.post('/signin', async (req, res)=>{

    const {success} = signinValidation.safeParse(req.body)
    if(!success){
        return res.json({
            msg : "check inputs"
        })
    }
    try{
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({username, password})
        if(!user){
            return res.json({
                msg : "Invalid email / password"
            })
        }

        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET)

        res.json({
            token
        })

    }
    catch(error){
        res.json({
            success : false,
            msg : "Server Error",
            error : error.message
        })
    }
})


router.put('/', authMiddleware, async (req, res)=>{
    const { success } = await updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg : "Check inputs"
        })
    }

    try{

        await User.updateOne({username : req.userId}, req.body)
        res.json({
            msg : "updated successfully"
        })
    }
    catch(error){
        res.json({
            msg : "error while updating",
            error : error.message
        })
    }
})

router.get('/bulk',  async (req,res)=>{
    const filter = req.query.filter || "";

    try{

        
        const users = await User.find({
            $or : [{
                firstname : {
                    $regex : filter
                }
            },{
                lastname : {
                    $regex : filter
                }
            }]
        }, '-password')
        
        res.json({
            users
        })
    } 
    catch(error){
        res.json({
            success : false,
            error : error.message

        })
    }
})


module.exports = router;