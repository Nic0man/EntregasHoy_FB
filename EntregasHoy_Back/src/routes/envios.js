const express = require("express")
const envioSchema = require("../models/envio")
const router = express.Router()
const mongoose = require('mongoose')

// ----- localhost:port/envio/IngresoPaquete
router.post('/IngresoPaquete',(req,res)=>{
    envioSchema.create(req.body,(error,data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router