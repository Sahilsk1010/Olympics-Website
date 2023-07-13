const express=require('express');
const mongoose=require('mongoose');
const app=express();


const router=express.Router();

router.get('/',(req,res)=>{
    res.send("RUNNING FINE");
})


module.exports=router;