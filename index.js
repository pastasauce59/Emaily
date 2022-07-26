const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./models/Survey')
require('./services/passport')

mongoose.connect(keys.mongoURI);

const app = express()

app.use(bodyParser.json())
app.use(
    cookieSession({
        // configuration object -> expects two different properties;
        //  maxAge (for how long the cookie should last) and Key (used to encrypt cookie)

        // maxAge passed in as milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,

        // cookiesSession allows specification of multiple keys if wanted and is why
        // the array exists to input multiple.
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app)

// app.get('/', (req, res) => {
//     res.send({ its: "ya boi" })
// })

if (process.env.NODE_ENV === 'production'){ 
    // Express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'))

    //Express will serve up index.html file if it doesn't recognize the route
    const path = require('path')
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);