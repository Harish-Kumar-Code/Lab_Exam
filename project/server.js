const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('http://localhost:5000/api/users/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users')); // Assuming you have a `users` route in a `routes` folder

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
