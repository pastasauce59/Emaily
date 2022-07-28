const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {
    // request handler can take as many middlerwares as we want but have to be added
    // in the order we want them to execute! i.e. We want to check first
    // that the user is logged in, then check if they have enough credits.
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
       const { title, subject, body, recipients } = req.body

       const survey = new Survey({
            title,
            subject,
            body,
            // recipients property is going to be our array of objects containing email addresses.
            // The code below is splitting recipients string into an array then returning an object for every email address
            // with property of email and a value of the actual email address.
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.body.id,
            // Date.now() returns a date object that is compatible with MongoDB
            dateSent: Date.now()
       })

       // Where mailer object will go
       const mailer = new Mailer(survey, surveyTemplate(survey))

    })
}