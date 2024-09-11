const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get user http://localhost:3001/users
app.get('/users', (req, res) => {
    controller.getUsers((req,res,next) => {
        res.send();
    })
})

//create user http://localhost:3001/newuser
app.post('/newuser', (req, res) => {
    controller.adduser(req.body,(callback) => {
        res.send();
    })
})

//update user http://localhost:3001/updateuser
app.put('/updateuser', (req, res) => {
    controller.updateUser(req.body,(callback) => {
        res.send(callback);
    })
})

//delete user http://localhost:3001/deleteuser
app.delete('/deleteuser', (req, res) => {
    controller.deleteUser(req.body,(callback) => {
        res.send(callback)
    })
})

//get one user http://localhost:3001/oneuser
app.get('/oneusers', (req, res) => {
    controller.getoneUser((req,res,next) => {
        res.send();
    })
})


module.exports = app;