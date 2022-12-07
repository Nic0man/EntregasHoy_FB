import { useState } from "react"


export const Destinatario = ({HandleDestinatario}) => {
    const[From,setFrom] = useState({
        Nombre:"",
        No:"",
        Direccion:"",
        CodPos:"",
    })

    const HandleOnChange = (value,atributte) => {
        const newdata = {...From}
        newdata[atributte]= value
        setFrom(newdata)
    }

    const HandleSubmit = (pos) =>{
        HandleDestinatario(From,pos)    //cuando se hace el submit, envia los datos de los campos al metodo del padre HandleDestinatario
    }

    return (
        <div>
            <div className='row'>
                <div className='col-xl-6 col-md-6'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Nombre"
                            placeholder=""
                            value={From.Nombre}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Nombre")}}
                            onBlur={()=>HandleSubmit("Nombre")}
                            required />
                        <label htmlFor="Nombre">Nombre Destinatario</label>
                    </div>
                </div>
                <div className='col-xl-6 col-md-6'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="No"
                            value={From.No}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "No")}}
                            onBlur={()=>HandleSubmit("No")}
                            placeholder=""
                            required />
                        <label htmlFor="No">N. identificación</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-md-6">
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Address"
                            placeholder=""
                            value={From.Address}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Direccion")}}
                            onBlur={()=>HandleSubmit("Direccion")}
                            required />
                        <label htmlFor="Address">Dirección Destinatario</label>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="CodPos"
                            placeholder=""
                            value={From.CodPos}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "CodPos")}}
                            onBlur={()=>HandleSubmit("CodPos")}
                            required />
                        <label htmlFor="CodPos">Código Postal</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

