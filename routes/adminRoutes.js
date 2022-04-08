const express = require('express')
const router = express.Router()

const adminActions = [
    {
        actinoId: 1,
        actionName: "changeHomeImage",
        displayName: 'Change Home Page Image'
    },
    {
        actinoId: 2,
        actionName: "changeAboutImage",
        displayName: 'Change About Page Image'
    },
    {
        actinoId: 3,
        actionName: "changeAboutText",
        displayName: 'Change About Text'
    },
    {
        actinoId: 4,
        actionName: "addNewBlog",
        displayName: 'Add New Blog'
    },
    {
        actinoId: 5,
        actionName: "listAllBlogs",
        displayName: 'List All Blogs'
    },
]


router.get("/admin", (req, res) => {
    res.render('admin/admin', { adminActions: adminActions })

})

router.get("/signin", (req, res) => {
    res.render('admin/signin') & console.log("\n You Are On The Sign Page (For Only Admin User)")

})

router.post("/signin", (req, res) => {

})

router.get("/signup", (req, res) => {
    res.render('admin/signup') & console.log("\n You Are On The Sign Page (For Only Admin User)")

})

router.post("/signup", (req, res) => {

})

module.exports = router