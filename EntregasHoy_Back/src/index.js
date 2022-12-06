const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
//------- configuracion --------------
app.set('port', 3000)
app.set('json spaces', 2) //formateo con dos tabulaciones
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
  