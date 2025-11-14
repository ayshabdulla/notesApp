require('dotenv').config()
const express = require('express')
const Runserver = require("./Database/connection");
const cors = require('cors');
const notesRoutes = require('./Routes/notesRoutes');


const app = express()
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())


Runserver()

app.use('/api', notesRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})



