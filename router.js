const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.get('/oneuser', controller.getoneUser);
router.post('/newuser', controller.adduser);
router.put('/updateuser', controller.updateUser);
router.delete('/deleteuser', controller.deleteUser);

module.exports = router;    

