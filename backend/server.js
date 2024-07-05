const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');


const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/Login_info' 
  
).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('userinformation', userSchema,'userinfo');

app.use(cors(
    ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    const newUser = new User({ username, password: hashedPassword });

   const saveUser=await newUser.save();
   console.log('Data Entered Successfully');
   res.status(201).json({message: 'Account Created',saveUser,success:true});
  
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
 const result=await User.findOne({ username, password: hashedPassword })
       if(!result){
        res.status(400).json({message:'User Not Found',result})
       }
       res.status(200).json({message:'User Exist',success: true})
});
    




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
