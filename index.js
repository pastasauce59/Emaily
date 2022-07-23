const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
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
require('./routes/billingRoutes')

// app.get('/', (req, res) => {
//     res.send({ its: "ya boi" })
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT);