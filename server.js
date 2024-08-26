const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');//cross origin 
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/reactconnect');

const UserSchema = new mongoose.Schema({
  username:String
});

const User = new mongoose.model('User', UserSchema);

app.post('/signup', async (req, res) => {
  try {
    const { username} = req.body;
    const newUser = new User({ username});
    await newUser.save();
    res.send();
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000);
