const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken)
    // console.log('profile:', profile)

    User.findOne({googleId: profile.id})
    .then(existingUser => {
        if (existingUser) {
            //if user already exists then do not save
            done(null, existingUser);
        } else {
            //if no recorded user with the same Id, then save new record of user.
            new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
    })
     
    

})
);