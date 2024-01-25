
const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  const cust = {
    Name: "Kalyani",
    Pin: 7412335,
    Adresss: "Nadia, West Bengal",
    isBoolean: true
  }
  res.send(cust)
})

// Import the Router file
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// here we use the router
app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

