import express from 'express'
import compression from 'compression'
import { json, urlenconded } from 'body-parser'
import { connectToMongoDB } from './db/client'
import { setUpControllers } from './controllers'

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const main = async () => {
    try{
        const app = express()
        await connectToMongoDB()
        //------- configuracion --------------
        app.set('port', 3000)
        app.set('json spaces', 2) //formateo con dos tabulaciones
        app.use(compression())
        app.use(urlenconded({ extend: false}))
        app.use(json())
        app.use(cors())
        app.use(morgan('dev'))
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }));
        // --------- Rutas ---------------
        app.use('/user', require('./routes/user'))

        //-------- Inicialización del servidor -------
        app.listen(3000, ()=>{console.log('servidor iniciado en el puerto 3000')})
    }catch (error){
        console.error(error)
    }
}

main()

  