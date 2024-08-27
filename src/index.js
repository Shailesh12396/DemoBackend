require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/home', (req, res) => {
    res.send('Hello from home')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT from src ${process.env.PORT}`)
})
