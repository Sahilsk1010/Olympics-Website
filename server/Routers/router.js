const express=require('express');
const app=express();
const multer=require('multer');
const mongoose=require('mongoose');
const { hashSync, compareSync } = require('bcrypt');
const jwt=require('jsonwebtoken');
const passport =require('passport');
const path=require('path');

const Fans=require('../model/fanSchema');
const Organisers=require('../model/orgSchema');
const {authSchemaOrg,authSchemaFan}=require('../helpers/validateuser');
const {Sports,Countries}=require('../model/sport_countrySchema');
require('dotenv').config('./config.env');



const Organiser=require('../model/orgSchema');
const Fan=require('../model/fanSchema');

const router=express.Router();


router.post('/orgregister',async (req,res)=>{
    try{
        console.log("HJKHJK")
        
        const checkall=await authSchemaOrg.validateAsync(req.body);
        console.log("HJKHJK")
        
        // const {type,fname,lname,dob,gender,country,email,password,cpassword}=req.body;
        const {type,fname,lname,dob,gender,country,email,password,cpassword}=checkall;

        console.log(checkall);

        const userExists=await Organisers.findOne({type,email});

        if(userExists){
            return res.status(409).send({
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
        if (err.isJoi===true){
            res.status(422).send({
                success:false,
                message:"Joi went wrong",
                error:err.details[0].message
        })
        }
        else{
            res.status(500).send({
                success:false,
                message:"Internal Server Error",
                error:err
            })
        }
    }
})


router.post('/fanregister',async (req,res)=>{
    try{

        const checkall=await authSchemaFan.validateAsync(req.body);


        const {name,email,gender,country,password}=checkall;

        const userExists=await Fans.findOne({email});
        console.log(userExists);
        if(userExists){
            return res.status(409).send({
                success:false,
                message:"Joi went wrong"
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
        if (err.isJoi===true){
            console.log("HI");
            return res.status(422).send({
                success:false,
                message:"Joi went wrong",
                error:err.details[0].message
            })
        }
        else{

            return res.status(500).send({
                success:false,
                message:"Something went wrong",
                error:err
            })
        }
    }
})


router.post('/login',async(req,res)=>{
    const {email,password,type} =req.body;
    if(!email || !password || !type){
        return res.status(400).send({
            success:false,
            message:"Enter all fields"
        })
    }

    var user;
    console.log(req.body);
    // type=req.body.type;

    
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
  

    res.cookie("Type",req.body.type,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
    });


    console.log(req.cookies);

    
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1d"})
    
    return res.status(200).send({
        success:true,
        message:"Logged in successfully",
        token:"Bearer "+token
    })
})


router.get('/cookie',(req,res)=>{
    console.log(req.cookies);
    console.log("cookie route");
    res.send("GOT cookies");
})


router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{

    console.log(req.cookies);
    
    return res.status(200).send({
        success:true,
        user:{
            id:req.user._id,
            email:req.user.email
        }
    })
});

router.get('/getsports',async (req,res)=>{
    const sports=await Sports.find({})
    res.send(sports);
})

router.get('/getcountries',async (req,res)=>{
    const countries=await Countries.find({})
    res.send(countries);
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({
    storage:storage
})

// router.post('/upload/:email',upload.single('file'),async (req,res)=>{
router.post('/upload',upload.single('file'),async (req,res)=>{
    try{

        console.log(req.file);
        const email=req.query.email;
        console.log(email);
        console.log("HI")
    
    
        const user=await Organiser.updateOne({email:email},{$push:{images:{img:req.file.filename}}});
        console.log(user);
    }
    catch(err){
        console.log("ERROR while uploading");
    }
})
    
    
    //Yet to complete
    // router.get('/getimage/:email',async (req,res)=>{
router.get('/getimages',async (req,res)=>{
    try{
        var email=req.query.email;
        // const email='p@gmail.com';
        console.log(email);
        console.log("HIHI");
        const user=await Organiser.find({email:email});
        console.log(user);
        res.status(200).send(user);
    }
    catch(err){
        console.log(err)
    }
})


// router.get('')


module.exports=router;