const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const envioSchema = new Schema({
    Destinatario: {
        Ciudad:{
            type:String,
            required:true,
        },
        CodPos:{
            type:Number,
            required:true,
        }
    },
    Remitente:{
        Nombre:{
            type:String,
            required:true,
        },
        Direccion:{
            type:String,
            required:true,
        },
        No:{
            type:Number,
            min: 999999,
            required:true,
        },
        CodPos:{
            type:Number,
            required:true,
        },
        Fecha:{
            type:Date,
        }
    },
    Dimensiones:{
        Peso:{
            type:Number,
            required:true,
        },
        Largo:{
            type:Number,
            required:true,
        },
        Ancho:{
            type:Number,
            required:true,
        },
        Alto:{
            type:Number,
            required:true,
        }
    }
},{
    collection: 'envios'
})

module.exports = mongoose.model('envio',envioSchema)