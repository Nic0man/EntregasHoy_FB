const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config();

const userRoutes = require("./routes/users")
const envioRoutes = require("./routes/envios")

mongoose
    .connect(process.env.STR_CONNECTION)
    .then((x)=>{
        console.log(`Connected to mongo, Database Name: "${x.connections[0].name}"`)
    })
    .catch((err)=>{
        console.error('Error connectig to mongo', err.reason)
    })


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cors())

// --------- Rutas ---------------
app.use('/envio', envioRoutes)
app.use('/users', userRoutes)

// --------- Config Puerto ------------
const port = process.env.PORT||9000

//-------- Inicialización del servidor -------
app.listen(port, ()=>{
    console.log('servidor iniciado en el puerto',port)
})

//404 Error
app.use((req, res, next)=>{
    next(createError(404))
})

app.use(function(err,req,res,next){
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

  