const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    type:{
        type:String,
        require:true
    },
	fname: {
		type: String,
		require: true
	},
	lname: {
		type: String,
		require: true
	},
	dob: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
    gender:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const Organisers = new mongoose.model("orgbase", orgSchema)

module.exports=Organisers;