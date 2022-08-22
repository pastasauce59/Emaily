const _ = require('lodash')
const { Path } = require('path-parser')
// ULR is a default integrated module in the node.js system, helps parse URLS in app
const { URL } = require('url')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!')
    })

    app.post('/api/surveys/webhooks', (req, res) => {
        // console.log(req.body)
        // res.send({})

        const events = _.map(req.body, ({ email, url}) => {
            const pathname = new URL(url).pathname
            const p = new Path('/api/surveys/:surveyId/:choice')
            // console.log(p.test(pathname))
            const match = p.test(pathname)
            if (match) {
                return { email, surveyId: match.surveyId, choice: match.choice }
            }
        })

        // console.log(events)

        // compact() is another function fomr the lodash library
        // it takes an array and removes any elements that are undefined
        const compactEvents = _.compact(events)

        // uniqBy is another function from lodash library, if there are any duplictes they are removed
        const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId')

        console.log(uniqueEvents)

        // response to request to let sendgrid know everything is ok and stop sending duplicate responses
        res.send({})
    })

    // request handler can take as many middlerwares as we want but have to be added
    // in the order we want them to execute! i.e. We want to check first
    // that the user is logged in, then check if they have enough credits.
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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

       try {
        await mailer.send()
        await survey.save()
        req.user.credits -= 1
        const user = await req.user.save()

        res.send(user)
       } catch (err) {
           res.status(422).send(err)
       }

    })
}