const req = require('express/lib/request');
const passport = require('passport')

module.exports = app => {

    // The GoogleStrategy has an internal identifier known as google. Passport knows
    // to take the string "google" and find the strategy connected to it.
    // SCOPE specifies to google servers what access we want to have access to in user's profile.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'] 
    })
    );
    
    // When a user visits this route, inside the url is the code from google to authenticate.
    // Passport will see this with the GoogleStrategy to exchange the code for the user's profile.
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            // res has a redirect function attached to it
            res.redirect('/surveys')
        }
    )

    app.get('/api/logout', (req, res) => {
        // req.logout() is a function attached to req object by passport. This takes the cookie that contains
        // the user id and destroys it. Cookie no longer exists.
        req.logout()
        // the response will then be undefined, or a blank page, to prove no user is logged in.
        // res.send(req.user)
        res.redirect('/')
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
};
