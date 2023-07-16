const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
	name: {
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

const Fans = new mongoose.model("fanbase", fanSchema)


module.exports=Fans;