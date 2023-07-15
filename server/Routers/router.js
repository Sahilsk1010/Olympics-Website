const express=require('express');
const mongoose=require('mongoose');
const app=express();

const Organiser=require('../model/orgSchema');
const Fan=require('../model/fanSchema');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("RUNNING FINE");
})

router.post('/orgRegister', async (req,res)=>{
    console.log(req.body);

    const {type,fname,lname,dob,gender,country,email,password,cpassword}=req.body;

    if(!fname || !lname || !dob || !gender || !country || !email || !password || !cpassword){
        return res.status(400).send({message:"All fields must be filled"});
    }
    else if(password!=cpassword){
        return res.status(404).json({message:"Invalid credentials"});
    }
    else{
        try{
            const orgExits=await Organiser.findOne({email:email});
            if(orgExits){
                return res.status(423).json({message:"User already exists"});
            }
            
            const organiser = new Organiser({type,fname,lname,dob,gender,country,email,password,cpassword});

            console.log("HELLO")

            try{
                const orgRegister=await organiser.save();
                res.status(201).json({message:"User saved successfully"});
            }
            catch(err){
                res.status(500).json({message:"Failed to register"});
            }
        }
        catch(err){
            res.status(500).json({message:"Server side error"});
        }
    }
})


router.post('/fanRegister', async (req,res)=>{
    console.log(req.body);

    const {name,gender,country,email,password,cpassword}=req.body;

    if(!name || !gender || !country || !email || !password || !cpassword){
        return res.status(400).send({message:"All fields must be filled"});
    }
    else if(password!=cpassword){
        return res.status(404).json({message:"Invalid credentials"});
    }
    else{
        try{
            const orgExits=await Organiser.findOne({email:email});
            if(orgExits){
                return res.status(423).json({message:"User already exists"});
            }
            
            const fan = new Fan({name,gender,country,email,password,cpassword});

            console.log("HELLO")

            try{
                const fanRegister=await fan.save();
                res.status(201).json({message:"User saved successfully"});
            }
            catch(err){
                res.status(500).json({message:"Failed to register"});
            }
        }
        catch(err){
            res.status(500).json({message:"Server side error"});
        }
    }
})


module.exports=router;