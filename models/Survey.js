const mongoose = require('mongoose')
const { Schema } = mongoose
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
    title: String,
    body: String, 
    subject: String,
    // Below communicats to mongoose that the 'recipients' property
    // will be an array containing a list of strings.
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // This property below says that every survey is going to belong to
    // a particular user. 
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
})

mongoose.model('surveys', surveySchema)