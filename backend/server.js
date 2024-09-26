const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user.model');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;


//middleware


app.post('/register', (req,res)=> {
 UserModel.create(req.body)
 .then(user => res.json(user))
 .catch(err => res.status(400).json(err))
})

app.post('/login', (req,res)=> {
const {email,password} = req.body;
UserModel.findOne({email:email})
.then(user => {
    if(user){

      if(user.password === password){
        res.json('Login Success')
    }else{
        res.json('Login Failed , password is incorrect')
    }  

    }else{
        res.json('No record found')
    }
    
    
})
})

mongoose.connect('mongodb://127.0.0.1:27017/register')

app.listen(port , ()=> {
    console.log(`Server is running on port ${port}`);
})