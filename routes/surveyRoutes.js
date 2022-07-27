const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

module.exports = app => {
    // request handler can take as many middlerwares as we want but have to be added
    // in the order we want them to execute! i.e. We want to check first
    // that the user is logged in, then check if they have enough credits.
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

    })
}