import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { endpointRegister } from '../constants/constants';

export const SignIn = () => {
  const [signin, setSignin] = useState({
    username:"",
    password:""
});

const navigate = useNavigate()

const handleSubmitin = async(e) =>{
    e.preventDefault();
    //console.log(`usuario: ${signin.username}\n` + `contraseña: ${signin.password}`);
    try{
      const response = await fetch(endpointRegister,{ //fetch devuelve una promesa
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(signin),
      })
      const data = await response.json()    //espera de la promesa
      console.log(data)
      if (data.login){ //.login del endpoint
        navigate('/Seguimiento'); //nombre de la ruta
      } 
      //navigate('/');    
    }catch(e){
      alert('Ha sucedido un error, comunicate con el administrador');
    }
}

const handleInOnChange = (value,atributte) =>{
    const copyState = {...signin};
    copyState[atributte] = value;
    setSignin(copyState);
    // console.log(signin);
};

return (
  <form action="" method="post" name="form1" onSubmit={handleSubmitin}>
    <div className="form-floating mb-3">
      <input className="form-control"
        type="text"
        id="username"
        name="username"
        placeholder=""
        value={signin.username}
        onChange={(ev) => handleInOnChange(ev.target.value, "username")}
        required />
        <label htmlFor="Usuario" >Usuario</label>
    </div>
    <div className="form-floating mb-3">
      <input className="form-control"
        type="password"
        id="password"
        name="password"
        placeholder=""
        value={signin.password}
        onChange={(ev) => handleInOnChange(ev.target.value, "password")}
        required />
        <label htmlFor="Contraseña">Contraseña</label>
    </div>
    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
      <br />
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </div>
  </form>
)
}


