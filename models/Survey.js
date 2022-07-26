const mongoose = require('mongoose')
const { Schema } = mongoose

const surveySchema = new Schema({
    title: String,
    body: String, 
    subject: String,
    // Below communicats to mongoose that the 'recipients' property
    // will be an array containing a list of strings.
    recipients: [String]

})

mongoose.model('surveys', surveySchema)