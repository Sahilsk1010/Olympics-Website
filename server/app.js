const express=require('express');
const mongoose=require('mongoose');
require('./db/conn')
const app=express();

const Router=require('./Routers/router');
app.use(Router);


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server running on ",PORT);
})