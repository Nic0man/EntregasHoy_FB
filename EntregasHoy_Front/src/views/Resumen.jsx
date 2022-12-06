

export const Resumen = ({ lista = [] }) => {

    const HandleSubmitIn = (e) =>{
        e.preventDefault()
        console.log(lista)
    }

    return (
        <div>
            <div className="row">
                <div className='col-xl-8 col-md-8 col-lg-8'>
                    <div className='card mb-4 resumen'>
                        <div className="card-body">
                            <span><strong>Remitente: </strong>{lista.Remitente}</span><br />
                            <span><strong>Destinatario: </strong>{lista.Destinatario}</span><br />
                            <span><strong>Dimensiones: </strong>{lista.Dimension}</span>
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


