const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/Login_info')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
        process.exit(1); // Exit the process with failure
    });

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    gamename: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: String, required: true }
});

const User = mongoose.model('userinformation', userSchema, 'userinfo');
const Review = mongoose.model('Review', reviewSchema, 'ReviewInfo');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists', success: false });
        }

        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        const newUser = new User({ username, password: hashedPassword });
        const saveUser = await newUser.save();

        res.status(201).json({ message: 'Account Created', saveUser, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error, success: false });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        const user = await User.findOne({ username, password: hashedPassword });
        if (!user) {
            return res.status(400).json({ message: 'User Not Found', success: false });
        }

        res.status(200).json({ message: 'User Exists', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error, success: false });
    }
});

// Post Review Route
app.post('/reviewpost', async (req, res) => {
    try {
        const { username, gamename, review, rating } = req.body;

        const newReview = new Review({ username, gamename, review, rating });
        const saveReview = await newReview.save();

        res.status(201).json({ message: 'Review Created', saveReview, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error, success: false });
    }
});

// Get Reviews Route
app.get('/reviewget', async (req, res) => {
    try {
        const reviews = await Review.find();
        if (!reviews.length) {
            return res.status(404).json({ success: false, message: 'Reviews Not Found' });
        }

        res.status(200).json({ success: true, reviews });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error });
    }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
