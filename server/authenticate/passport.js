require('dotenv').config('../config.env');
const cookieParser=require('cookie-parser');




const passport=require('passport');
const Fans=require('../model/fanSchema');
const Organisers=require('../model/orgSchema');

var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
opts.passReqToCallback=true


async function getData() {
    const url = 'http://localhost:8000/getuser';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
} 


const jwtStrategyWrapper=(type)=>{

    getData();

    
    return new JwtStrategy(opts, async function(req,jwt_payload, done){

        console.log(type);
        
        if(type==='Fan'){
            try{
                const user=await Fans.findOne({_id: jwt_payload.id}); 
                if(user){
                    return done(null, user);
                }
                else{
                    return done(null,false);
                }
            }
            catch(err){
                return done(err,false);
            }
        }
        else{
            try{
                console.log("ELSE CSE");
                const user=await Organisers.findOne({_id: jwt_payload.id}); 
                console.log(user);
                if(user){
                    return done(null, user);
                }
                else{
                    return done(null,false);
                }
            }
            catch(err){
                return done(err,false);
            }
        }
    })
}



passport.use(new JwtStrategy(opts, async function(req,jwt_payload, done){

    
    var type='ad';
    // console.log(req.cookies.Type);
    console.log(jwt_payload);
    
    if(type==='Fan'){
        try{
            const user=await Fans.findOne({_id: jwt_payload.id}); 
            if(user){
                return done(null, user);
            }
            else{
                return done(null,false);
            }
        }
        catch(err){
            return done(err,false);
        }
    }
    else{
        try{
            console.log("ELSE CSE");
            const user=await Organisers.findOne({_id: jwt_payload.id}); 
            console.log(user);
            if(user){
                return done(null, user);
            }
            else{
                return done(null,false);
            }
        }
        catch(err){
            return done(err,false);
        }
    }
}));



// passport.use(jwtStrategyWrapper('Custom parameter'));
