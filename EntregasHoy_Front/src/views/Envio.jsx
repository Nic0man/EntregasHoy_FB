import { useState } from "react"
import { Destinatario } from "./Destinatario"
import { Dimensiones } from "./Dimensiones"
import { Remitente } from "./Remitente"
import { Resumen } from "./Resumen"

const ResumenInicial = {Remitente:'', Destinatario:'', Dimension: ''}

const Envio = () => {
    const [lista, setLista] = useState(ResumenInicial)

    const HandleRemitente = (sentTo) => {
        //console.log(`Ciudad: ${sentTo.Ciudad}\n` + `Codigo Postal: ${sentTo.CodPos}`)
        const newLista = {...lista}
        newLista.Remitente = `${sentTo.Ciudad}, ${sentTo.CodPos}`
        setLista(newLista)
        //console.log(newLista.Remitente)
    }

    const HandleDestinatario = (From) => {
        //console.log(`Nombre: ${From.Nombre}\n` + `Identificacion: ${From.No}\n` + `Direccion: ${From.No}\n` + `Direccion: ${From.CodPos}\n`)
        const newLista = {...lista}
        newLista.Destinatario = `${From.Nombre}, ${From.No}, ${From.Address},${From.CodPos}`
        setLista(newLista)
        //console.log(newLista.Destinatario) 
    }

    const HandleDimensiones = (box) => {
        //console.log(`Nombre: ${From.Nombre}\n` + `Identificacion: ${From.No}\n` + `Direccion: ${From.No}\n` + `Direccion: ${From.CodPos}\n`)
        const newLista = {...lista}
        newLista.Dimension = `${box.Peso} Kg, Medidas: ${box.Largo}x${box.Ancho}x${box.Alto}cm`
        setLista(newLista)
        //console.log(newLista.Dimension) 
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
