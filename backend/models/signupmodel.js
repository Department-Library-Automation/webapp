const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');

const signupSchema = new schema({
    fullName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
   
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

 signupSchema.pre('save', function(next){
     if(this.isModified('password')){
         bcrypt.hash(this.password, 8, (err, hash) => {
             if(err) return next (err);
             this.password = hash;
             next();
         })
     }
 })

const signup = mongoose.model('signup',signupSchema);
module.exports = signup;