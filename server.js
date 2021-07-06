const express = require('express')
const app = express()

// Re-implement this using postgreSQL later
const users = []

app.set('view-engine', 'ejs')

// Allow us to access variables sent from the forms
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'kamatoro' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {

})
app.listen(3000)
