const express = require('express')
const router = express.Router()

let SystemValueData = [
    {
        postTitle: "Testing a blog",
        postsubTitle: "This is a blog testing",
        image: "https://images.unsplash.com/photo-1643407997122-86f5534dcbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        author: "Melih",
        date: "28/04/2022"
    },
    {
        postTitle: "Mountains Not So Far",
        postsubTitle: "Everything that is not so far is far!!",
        image: "https://images.unsplash.com/photo-1630358087682-88993c5b33d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        author: "Kemal",
        date: "27/04/2021"
    }]
router.get("/", (req, res) => {
    res.render('index', { SystemValue: SystemValueData }) & console.log("\n You Are On The Home Page")

})

router.get("/about", (req, res) => {
    res.render('about') & console.log("\n You Are On The About Page")

})

router.get("/resume", (req, res) => {
    res.render('resume') & console.log("\n You Are On The Resume Page")

})
router.get("/contact", (req, res) => {
    res.render('contact') & console.log("\n You Are On The Resume Page")

})

module.exports = router