require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CALLBACK_URL,
    CLIENT_ID,
    CLIENT_SECRET
} = process.env

massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db);
})

//massive connections too database
app.get('/api/get_post', (req, res, next) => {
    req.app.get('db').get_post().then(post => {
        res.status(200).send(post)
    }).catch(errorMessage => {
        console.log(errorMessage)
    })
})

app.post('/api/add_post', (req, res, next) => {
    req.app.get('db')
        .add_post([req.body.userInput, req.body.gameId])
        .then(response => {
            console.log('success');
            res.status(200).send(response)
        }).catch(errorMessage => {
            console.log(errorMessage)
        })
})



// order is importants
// session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
// must come after session
app.use(passport.initialize());
// must come after initialize
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db');
    let { id, username } = profile;
    db.find_user([id]).then((foundUser) => {
        if (foundUser[0]) {
            done(null, foundUser[0].id)
        } else {
            db.create_user([id, username]).then((user) => {
                done(null, user[0].id)
            })
        }
    })



    // db.create_user([id, username]).then((user) => {
    //     done(null, user[0].id)
    // })
}))

passport.serializeUser((id, done) => {
    done(null, id)
})

passport.deserializeUser((id, done) => {
    // whatever is passed out, ends up on req object as req.user
    app.get('db').find_session_user([id]).then((user) => {
        done(null, user[0])
    })
})

app.get('/login', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    // make sure too put in full front end URL!!
    // typical successRedirect here
    // typical failureRedirect here
}))

//Full CRUD for user creating/deleting
app.get('api/find_user', (req, res) => {
    res.send(username)
})

app.get('api/find_user/:id', (req, res) => {
    let { user } = req.params
    res.send(foundUser[0])
})


app.post('/api/create_user', (req, res) => {
    console.log(req.body)
    let { newUser } = req.body
    res.send(newUser)
})

app.put('/api/unrealUsers/:id', (req, res) => {
    let unrealUsersIndex = null
    unrealUsers.forEach((unrealUsers, index) => {
        unrealUsersIndex = index
    },
        res.send(unrealUsers))
})

app.delete('/api/unrealUsers/:id', (req, res) => {
    unrealUsers.forEach((unrealUsers, index) => {
        if (unrealUsers.id === Number(req.params.id)) {
            property.splice(index, 1)
        }
    })
    res.status(200).send('Deleted user')
})

// CRUD for forums page 
app.get('', (req, res) => {

})

app.post('/api/add_post', (req, res) => {
    console.log(req.body)
    let { newPost } = req.body
    res.send(newPost)
})

app.put('/api/forum_table_seed', (req, res) => {
    postIndex = null
    forum.forEach((forum, index) => {
        postIndex = index
    },
        res.send(forum)
    )
})

app.delete('', (req, res) => {

})

//stripe
app.post('/api/payment', controller.payment);








app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
})