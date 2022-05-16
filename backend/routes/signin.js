const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const emailvalidator = require("email-validator")

const User = require('../models/signupModel')

loginRouter.post('/', async (req, res) => {
    var username=req.body.email
    var password=req.body.password
    User.findOne({$or:[{email:username}]})
    .then(user =>{
        if(emailvalidator.validate(username))
        {
            if(user)
            {
                bcrypt.compare(password,user.password,function(err,result)
                {
                    if(err)
                    {res.json({error:err})}
                        if(result){res.json({message:"Login success"})}
                        else{return res.json({error: 'Incorrect Password'})}
                })
            }
            else{return res.json({error: 'User Not Found'})}
        }
        else
        {
            //res.status(400).send('Invalid Email');
            return res.json({error: 'Invalid Email'})
        }
        
    })
    })


module.exports = loginRouter