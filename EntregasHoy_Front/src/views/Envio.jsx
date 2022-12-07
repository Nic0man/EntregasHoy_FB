import { useState } from "react"
import { Destinatario } from "./Destinatario"
import { Dimensiones } from "./Dimensiones"
import { Remitente } from "./Remitente"
import { Resumen } from "./Resumen"

//-----------------------------------Información para imprimir en el resumen--------------------------------------------------------------------
const ResumenInicial = { Remitente:{Ciudad:'', CodPos:''}, 
                         Destinatario:{Nombre:'', Direccion:'', No:'', CodPos:'', Fecha:''},
                         Dimensiones: {Peso:'', Largo:'', Ancho:'', Alto:''} }

// ---------------------------------------------------------------------------------------------------------------------------------------------
const Envio = () => {
    const [lista, setLista] = useState(ResumenInicial)

    const HandleRemitente = (sentTo,pos) => {
        //console.log(`Ciudad: ${sentTo.Ciudad}\n` + `Codigo Postal: ${sentTo.CodPos}`)
        const newLista = {...lista}
        newLista.Remitente[pos] = sentTo[pos]
        setLista(newLista)
        console.log(newLista.Remitente)
    }

    const HandleDestinatario = (From,pos) => {
        //console.log(`Nombre: ${From.Nombre}\n` + `Identificacion: ${From.No}\n` + `Direccion: ${From.No}\n` + `Direccion: ${From.CodPos}\n`)
        const newLista = {...lista}
        newLista.Destinatario[pos] = From[pos]
        setLista(newLista)
        console.log(newLista.Destinatario) 
    }

    const HandleDimensiones = (box,pos) => {
        //console.log(`Nombre: ${From.Nombre}\n` + `Identificacion: ${From.No}\n` + `Direccion: ${From.No}\n` + `Direccion: ${From.CodPos}\n`)
        const newLista = {...lista}
        newLista.Dimensiones[pos] = box[pos]
        setLista(newLista)
        console.log(newLista.Dimensiones) 
    }

    return (
        <div className='container-fluid px-4'>
            <h1 className='mt-4'>Gestión de Envíos</h1>
            <div className='card mb-4'>
                <div className='card-body'>
                    <Remitente HandleRemitente={HandleRemitente} />
                    <hr />
                    <Destinatario HandleDestinatario = {HandleDestinatario}/>
                    <hr />
                    <Dimensiones HandleDimensiones = {HandleDimensiones} />
                    <hr />
                    <Resumen lista={lista} />
                </div>
            </div>
        </div>
    )
}

export default Envio
