const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Fans=require('../model/fanSchema');
const Organisers=require('../model/orgSchema');
const { hashSync, compareSync } = require('bcrypt');
const jwt=require('jsonwebtoken');
const passport =require('passport');
require('dotenv').config('./config.env');




const router=express.Router();



router.post('/orgregister',async (req,res)=>{
    try{

        const {type,fname,lname,dob,email,gender,country,password}=req.body;

        const userExists=await Organisers.findOne({type,email});

        if(userExists){
            return res.status(201).send({
                success:false,
                message:"User already exists",
            })
        }

        const user=new Organisers({
            type,fname,lname,dob,email,gender,country,password:hashSync(password,10)
        })

        const saveUser=await user.save();
        return res.status(201).send({
            success:true,
            message:"User created successfully",
            user:{
                id:saveUser._id,
                email:user.email
            }
        })
    }
    catch(err){
        res.send({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
})


router.post('/fanregister',async (req,res)=>{
    try{

        const {name,email,gender,country,password}=req.body;

        const userExists=await Fans.findOne({email});
        console.log(userExists);
        if(userExists){
            return res.status(201).send({
                success:false,
                message:"User already exists",
            })
        }

        const user=new Fans({
            name,email,gender,country,password:hashSync(password,10)
        })

        const saveUser=await user.save();
        return res.status(201).send({
            success:true,
            message:"User created successfully",
            user:{
                id:saveUser._id,
                email:user.email
            }
        })
    }
    catch(err){
        res.send({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
})

var type;

router.post('/login',async(req,res)=>{


    var user;
    console.log(req.body);
    type=req.body.type;
    if(req.body.type==='Fan'){
        user=await Fans.findOne({email:req.body.email});
    }
    else{
        user=await Organisers.findOne({email:req.body.email});
    }

    if(!user){
        return res.status(401).send({
            success:false,
            message:"Could not find the user"
        })
    }
    
    if(!compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success:false,
            message:"Incorrect password"
        })
    }
    
    const payload={
        email:user.email,
        id:user._id
    }

    console.log(req.body.type);

    
    console.log("TYpe in login ",type);
    
    exports.type=type;
    
    console.log(payload);

    res.cookie("Type",req.body.type,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
    });
    
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1d"})
    
    return res.status(200).send({
        success:true,
    message:"Logged in successfully",
    token:"Bearer "+token
    })
})


router.get('/setuser', (req, res)=>{
    console.log(req.cookies.Type);
    res.status(200).send('user data added to cookie');
});


router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{

    return res.status(200).send({
        success:true,
        user:{
            id:req.user._id,
            email:req.user.email
        }
    })
});

exports.router=router;


