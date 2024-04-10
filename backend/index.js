const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const signupmodel = require("./models/schemacreate");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/toughlove', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Your further logic here
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.post('/login', (req,res) =>{
    const {email,pass}=req.body;
    signupmodel.findOne({email:email})
    .then(user => {
      if (user){
        if (user.pass === pass){
          res.json("success")
        }
        else{
          res.json("password is incorrect")
        }
      } 
      else{
        res.json("user no found")
      }
    }
    )
})
app.post('/signup', (req, res) => {
  console.log("i am here")
  signupmodel
    .create(req.body)
    .then((result) => {res.json(result)})
    .catch((err) => res.json(err));
});
app.listen(4000, () => {
  console.log("started server listens to 4000");
});
