const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const router = require('./router');            

const app = express(); // Declare 'app' only once

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://chamoddilshan0907:Sbw0$pcd@userrecords.gwyxd.mongodb.net/?retryWrites=true&w=majority&appName=UserRecords';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log('MongoDB error:', err);
    }
};

connectDB();

const PORT = 3001;

app.use('/api', router); // Move this up so routes are set before server starts

const server = app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running on port ${PORT}`);
});
