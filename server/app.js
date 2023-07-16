const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const passport=require('passport');
const cookieParser=require('cookie-parser');

require('./db/conn')
const app=express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(cors());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000/' }));
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(passport.initialize());

require('./authenticate/passport');

const imp=require('./Routers/router');
const Router=imp.router;

app.use(Router);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server running on ",PORT);
})