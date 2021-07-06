const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

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

app.post('/register', async (req, res) => {
    try{
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push(
            {
                id: Date.now().toString(), // replace with identity column in db
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        )
        res.redirect('/login')
    } catch
    {
        res.redirect('/register')
    }
    console.log(users)
})
app.listen(3000)
