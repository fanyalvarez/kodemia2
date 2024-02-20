require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001
const connectDB = require('./db')



// app = {get(), post()}
const userRoutes = require('./src/routes/user') //importa todos los endpoints

app.use(express.json())//content type

connectDB()

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.status(200).send('Hello World!')
})// app.router = {get(), post(), get : [/]}


app.use('/user', userRoutes)
// app.router = {get(), post(), get : [/users, /posts]}

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
