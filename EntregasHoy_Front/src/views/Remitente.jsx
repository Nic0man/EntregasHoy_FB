import { useState } from "react"

export const Remitente = ({HandleRemitente}) => {

    const[sentTo,setsentTo] = useState({
        Ciudad: "",
        CodPos: "",
    })

    const HandleOnChange = (value,atributte) => {
        const newdata = {...sentTo}
        newdata[atributte]= value
        setsentTo(newdata)
    }

    const HandleSubmit = (pos) =>{
        HandleRemitente(sentTo,pos)
    }

    return (
        <div className='row'>
            <div className='col-xl-6 col-md-6'>
                <div className="form-floating mb-3">
                    <input className="form-control"
                        type="text"
                        name="Ciudad"
                        placeholder=""
                        value={sentTo.Ciudad}
                        onChange={(e) => {HandleOnChange(e.target.value, "Ciudad")}}
                        onBlur={()=>HandleSubmit("Ciudad")}
                        required />
                    <label htmlFor="Ciudad">Ciudad Remitente</label>
                </div>
            </div>
            <div className='col-xl-6 col-md-6'>
                <div className="form-floating mb-3">
                    <input className="form-control"
                        type="text"
                        name="CodPos"
                        placeholder=""
                        value={sentTo.CodPos}
                        onChange={(e) => HandleOnChange(e.target.value,"CodPos")}
                        onBlur={()=>HandleSubmit("CodPos")}
                        required />
                    <label htmlFor="CodPos">Codigo Postal</label>
                </div>
            </div>

        </div>
    )
}


