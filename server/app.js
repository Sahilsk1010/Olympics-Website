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


const { spawn } = require('child_process');

app.get('/streamlit', (req, res) => {
  const streamlitProcess = spawn('streamlit', ['run', 'olympics.py']);
  streamlitProcess.stdout.pipe(process.stdout);
  streamlitProcess.stderr.pipe(process.stderr);
  res.status(200).json({message:"Showing Stats"});
});



app.listen(PORT,()=>{
    console.log("Server running on ",PORT);
})