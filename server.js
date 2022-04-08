// Database & UX & BACK-END
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const LocalStrategy = require("passport-local")
const ExpressSession = require('express-session')
const passport = require('passport')

// Models
const User = require('./models/User')

// App
const app = express()

// Routes
const SystemRoutes = require(__dirname + "/routes/routes")
const AdminRoutes = require(__dirname + '/routes/adminRoutes')


function AppConfig(err) {
    try {
        if (err) return console.log("\n ERR : " + err)
        else return app.set('view engine', 'ejs') & app.use(express.static('public')) & mongoose.connect('mongodb://localhost/Blog') & app.use(bodyParser.urlencoded({ extended: true }))
    } catch (error) {
        if (error) return console.log("\n ERR : " + error)
        else return console.log("\n The application has timed out" +
            "\n\n Please restart, if it does not work again, if it gives an error, review the codes.")
    }
}
AppConfig()

app.use(require("express-session")({
    secret: 'XXg&:{qQ<Anke`5Pnw*<Y7%+=*QAMIszNVCMCXy*ROD>V}PV8^1X21o3TlyK/:>',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

function RoutesUsing(err) {
    try {
        if (err) return console.log("\n ERR : " + err)
        else return app.use(SystemRoutes) & app.use(AdminRoutes)
    } catch (error) {
        if (error) return console.log("\n ERR : " + error)
        else return console.log("\n The application has timed out." +
            "\n\n Please restart, if it does not work again, if it gives an error, review the codes.")
    }
}
RoutesUsing()

function App(err) {
    try {
        if (err) return console.log("\n ERR : " + err)
        else {
            const server = app.listen(8000, (err) => {
                function Server() {
                    try {
                        console.clear()
                        if (err) return console.log("\n ERR : " + err)
                        else return console.log(("\n App Started , Port Number : " + "%d" + "\n ERR : " + err), server.address().port)
                    } catch (error) {
                        console.log(error)
                    }
                }
                Server()
            })
        }
    } catch (error) {
        if (error) return console.log("\n ERR : " + error)
        else return console.log("\n The application has timed out." +
            "\n\n Please restart, if it does not work again, if it gives an error, review the codes.")
    }
}
App()