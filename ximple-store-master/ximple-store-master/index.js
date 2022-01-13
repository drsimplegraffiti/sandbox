const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
require('./utils/db.config')
const MongoStore = require('connect-mongo')
const mongoDbConnection = require('./utils/db.config')
const passport = require('passport')
require('./utils/authStrategies/localStrategy')
const authMiddleware = require('./middlewares/authMiddleware')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use(session({
    secret: '42a7c8dcf3c4b10305926f301448b9f0cee96f09',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/ximple-store',
        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    })
}))

app.use(passport.initialize())
app.use(passport.session())
app.locals.message = {}
app.locals.formData = {}
app.locals.errors = {}

app.use('/', authRoutes)

app.get('/', (req, res) => {
    console.log('User:', req.user)
    return res.render('index')
})

app.get('/homepage', authMiddleware, (req, res) => {
    res.send(`welcome ${req.user.name} `)
})
app.listen(7777, () => {
    console.log('app is running on port 7777')
})

module.exports = app