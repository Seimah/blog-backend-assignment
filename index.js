const { request, response } = require('express');
const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const userRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')

mongoose.connect(process.env.MONGODB_URL_DEV, {})
.then(()=>{
    console.log('mongodb connected')
})
.catch((error)=>{
    console.log(error)
})

app.use(express.json())
app.use(userRoutes)
app.use(postRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server started on localhost: 8050')
});

