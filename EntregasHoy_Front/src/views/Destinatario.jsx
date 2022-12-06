import { useState } from "react"


export const Destinatario = ({HandleDestinatario}) => {
    const[From,setFrom] = useState({
        Nombre:"",
        No:"",
        Address:"",
        CodPos:"",
    })

    const HandleOnChange = (value,atributte) => {
        const newdata = {...From}
        newdata[atributte]= value
        setFrom(newdata)
    }

    const HandleSubmit = () =>{
        HandleDestinatario(From)
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
                            onBlur={HandleSubmit}
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
                            onBlur={HandleSubmit}
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
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Address")}}
                            onBlur={HandleSubmit}
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
                            onBlur={HandleSubmit}
                            required />
                        <label htmlFor="CodPos">Código Postal</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

