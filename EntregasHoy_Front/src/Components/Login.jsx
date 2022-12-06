import React, { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export const Login = () => {

    const [tabs, setTabs] = useState({
        activo: 1
    })

    return (
        <div className='container flex-center'>
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><center><h3>Plataforma virtual - EntregasHoy</h3></center></div>

                <div className="card-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setTabs({ activo: 1 })}>Ingresar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setTabs({ activo: 2 })}>Registrarse</a>
                        </li>
                    </ul>
                    <div className="">

                        {tabs.activo == 1
                            ? <div id="Singinid" className="login"><SignIn /> </div>
                            : <div id="Singupid" className="registro" ><SignUp /></div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

