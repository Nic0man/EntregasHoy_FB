import { useState } from "react"


export const Dimensiones = ({HandleDimensiones}) => {

    const [box, setBox] = useState ({
        Peso:"",
        Largo:"",
        Ancho:"",
        Alto:""
    })

    const HandleOnChange = (value, atributte) =>{
        const newbox = {...box}
        newbox[atributte] = value
        setBox(newbox)
    }

    const HandleSubmit =()=>{
        HandleDimensiones(box)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-xl-3 col-md-3'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Peso"
                            placeholder=""
                            value={box.Peso}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Peso")}}
                            onBlur={HandleSubmit}
                            required />
                        <label htmlFor="fullname">Peso (Kg)</label>
                    </div>
                </div>
                <div className='col-xl-3 col-md-3'>
                    <div></div>
                </div>
                <div className='col-xl-2 col-md-3'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Largo"
                            placeholder=""
                            value={box.Largo}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Largo")}}
                            onBlur={HandleSubmit}
                            required />
                        <label htmlFor="Usuario">Largo (cm)</label>
                    </div>
                </div>
                <div className='col-xl-2 col-md-3'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Ancho"
                            placeholder=""
                            value={box.Ancho}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Ancho")}}
                            onBlur={HandleSubmit}
                            required />
                        <label htmlFor="Usuario">Ancho (cm)</label>
                    </div>
                </div>
                <div className='col-xl-2 col-md-3'>
                    <div className="form-floating mb-3">
                        <input className="form-control"
                            type="text"
                            name="Alto"
                            placeholder=""
                            value={box.Alto}
                            onChange={(ev) => {HandleOnChange(ev.target.value, "Alto")}}
                            onBlur={HandleSubmit}
                            required />
                        <label htmlFor="Usuario">Alto (cm)</label>
                    </div>
                </div>
            </div>
        </div>
    )
}


