const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express()

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken)
    console.log('profile:', profile)
})
);

// The GoogleStrategy has an internal identifier known as google. Passport knows
// to take the string "google" and find the strategy connected to it.
// SCOPE specifies to google servers what access we want to have access to in user's profile.
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] 
})
);

// When a user visits this route, inside the url is the code from google to authenticate.
// Passport will see this with the GoogleStrategy to exchange the code for the user's profile.
app.get('/auth/google/callback', passport.authenticate('google'))

// app.get('/', (req, res) => {
//     res.send({ its: "ya boi" })
// })



const PORT = process.env.PORT || 5000;
app.listen(PORT);