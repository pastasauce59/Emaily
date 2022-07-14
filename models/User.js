const mongoose = require('mongoose');
// const Schema = mongoose.Schema
// desctructed from code above
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String
})

mongoose.model('users', userSchema)