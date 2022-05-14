const signupRouter = require('express').Router();
let Signup = require('../models/signupModel');

signupRouter.get('/', (req,res) => {
    Signup.find()
    .then(signup => res.json(signup))
    .catch(err => res.status(400).json('Error: '+err));
})

signupRouter.post('/', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new Signup({fullName, email, password});
    newUser.save()
    .then(data => {
        console.log(data)
        res.json({ msg: 'User added' })
    })
    .catch(err => {
        res.json({ error: "User already exist" })
    })
})

module.exports = signupRouter