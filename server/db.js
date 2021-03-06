require("dotenv").config()
const mongoose = require('mongoose');
const url = process.env.MONGODBURL

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  salt: String, // add extra security to password,
  hash: String // a password hash
});


mongoose.model('User', User);

//connect db
mongoose.connect(process.env.MONGODB_URI || url, {
	useNewUrlParser: "true",
	useUnifiedTopology: "true",
})
.then(() => console.log('connected to database'))
.catch(err =>{
	console.log(err)
});
