import { endpointSending } from '../constants/constants';

export const Resumen = ({ lista = [] }) => {

//------------------ Ingreso de envios a la base de datos -----------------------------------
    const HandleSubmitIn = async(e) =>{
        e.preventDefault()
        //console.log(JSON.stringify(lista))
        try{
            const response =await fetch(endpointSending,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(lista),
            })
            const data = await response.json()
            console.log(data)
            alert('Ingreso exitoso!')
        }catch(error){
            alert('Ha sucedido un error al cargar los datos')
        }
    }

// ---------------------------------------------------------------------------------------------

    const msgRemitente = `${lista.Remitente.Ciudad}, ${lista.Remitente.CodPos} `
    const msgDestinatario = `${lista.Destinatario.Nombre}, ${lista.Destinatario.No}, ${lista.Destinatario.Direccion}, ${lista.Destinatario.CodPos}`
    const msgDimensiones = `${lista.Dimensiones.Peso}Kg => (${lista.Dimensiones.Largo}x${lista.Dimensiones.Ancho}x${lista.Dimensiones.Alto})`

    return (
        <div>
            <div className="row">
                <div className='col-xl-8 col-md-8 col-lg-8'>
                    <div className='card mb-4 resumen'>
                        <div className="card-body">
                            <span><strong>Remitente: </strong>{msgRemitente}</span><br />
                            <span><strong>Destinatario: </strong>{msgDestinatario}</span><br />
                            <span><strong>Dimensiones: </strong>{msgDimensiones}</span>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-4 col-lg-4'>
                    <div className="row">
                        <span className="centro"><strong>Precio: $</strong> 100</span>
                    </div>
                    <div className="row">
                        <div className="centro mt-3">
                            <form action="" method="POST" type="submit" onSubmit={HandleSubmitIn}>
                                <button type="submit" className="btn btn-primary centro">Ingresar</button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="centro mt-2">
                            <button className="btn btn-primary">Borrar Campos</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


