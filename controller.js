const User = require('./model'); // Ensure this is correctly imported

// Create users
const adduser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Update users
const updateUser = (req, res, next) => {
    const { id, name } = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Delete users
const deleteUser = (req, res, next) => {
    const { id } = req.body;
    User.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Get all users
const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Get user by id
const getoneUser = (req, res, next) => {
    const { id } = req.body;
    User.findOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

exports.adduser = adduser;
exports.getUsers = getUsers;
exports.getoneUser = getoneUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
