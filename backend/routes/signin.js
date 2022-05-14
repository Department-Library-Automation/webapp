const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../models/signupModel')

loginRouter.post('/', async (req, res) => {
    var username=req.body.email
    var password=req.body.password
    User.findOne({$or:[{email:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    res.json({
                        message:"Login success",
                    })
                }else{
                    return res.json({
                        error: 'Incorrect Password',
                    })
                }
            })
        }
        else{
            return res.json({
                error: 'User Not Found'
            })
        }
    })
    })


module.exports = loginRouter