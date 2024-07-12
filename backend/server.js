const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');


const cors = require('cors');
const { type } = require('os');
const { Console } = require('console');
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

const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    gamename: { type: String, required: true },
    review: {type: String, required:true},
    rating: {type:String, required:true}
});

const User = mongoose.model('userinformation', userSchema,'userinfo');
const Review= mongoose.model('Review',reviewSchema,'ReviewInfo');
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
    
app.post('/reviewpost', async (req, res) => {
    const { username, gamename,review,rating } = req.body;

    const newReview = new Review({ username, gamename,review,rating });

   const saveReview=await newReview.save();
   console.log('Data Entered Successfully');
   res.status(201).json({message: 'Review Created',saveReview,success:true});
  
});


app.get('/reviewget', async (req, res) => {
    try {
      const reviews = await Review.find();
      if (!reviews.length) {
        res.status(404).json({ success: false, message: 'Reviews Not Found' });
      } else {
        res.status(200).json({ success: true, reviews });
        console.log("Reviews Found");
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server Error', error });
    }
  });
  


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
