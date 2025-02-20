const express = require("express")
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get('/index', (req,res) => {
    // app.use(express.static("public"))
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const classes = {
    classes: 
    [
        {
            title: "Mathematics",
            instructor: "Matthew Donell",
            description: "Introduction to Algebra, Trigonometry, Calculus",
            schedule: ["Monday", "Wednesday"],
            method: "virtual"
        },
        {
            title: "English",
            instructor: "Meredith Kortland",
            description: "Introduction to grammar, syntax, lexico",
            schedule: ["Tuesday", "Wednesday"],
            method: "on campus"
        },
        {
            title: "French",
            instructor: "Padley Perard",
            description: "Introduction to verbs, vocabulary, basic communications",
            schedule: ["Tuesday", "Thursday"],
            method: "online"
        },
        {
            title: "Javascript",
            instructor: "Zachary Hamby",
            description: "Web development using Javascript and its modules",
            schedule: ["Monday", "Wednesday"],
            method: "Learn Anywhere"
        },
        {
            title: "UI/UX Design",
            instructor: "Marvens Scott",
            description: "Web design using bootstrap",
            schedule: "Wednesday",
            method: "on campus"
        },
        {
            title: "Communication",
            instructor: "Martha Packard",
            description: "Learn how to communicate better",
            schedule: "Wednesday",
            method: "on campus"
        },
        {
            title: "SDEV 255",
            instructor: "Zachary Hamby",
            description: "Web design using bootstrap, Javascript intro, node.js, Express...",
            schedule: ["Monday", "Wednesday"],
            method: "on campus"
        },
        {
            title: "Machine Learning",
            instructor: "Tony Galburg",
            description: "Learn AI, build machine learning systems",
            schedule: "Saturday",
            method: "on campus"
        },
        {
            title: "Cybersecurity",
            instructor: "Harry Potter",
            description: "Learn how to defend agains cyber threats",
            schedule: ["Wednesday", "Friday"],
            method: "online"
        },
    ]
}
app.get('/register', (req,res)=> {
    res.json(classes)
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})