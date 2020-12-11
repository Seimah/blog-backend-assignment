const express = require('express')
const mongoose = require('mongoose')

// routers here
const authenticationRoutes = require('./routes/auth')

const app = express()
app.use(express.json())


app.get('/', ( request, response ) => {
    // call back function eg. app.get
    response.send('<h1>Hey you are here</h1>')
})

app.listen(8050, () => {
    console.log('server started on local host 8050')
})

