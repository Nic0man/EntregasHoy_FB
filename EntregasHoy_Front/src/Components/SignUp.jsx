import React, { useState } from 'react'

export const SignUp = () => {
  const [signup, setsignup] = useState({
    fullname: "",
    Usuario: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const handleUpOnChange = (value, atributte) => {
    const copyState = { ...signup };
    copyState[atributte] = value;
    setsignup(copyState);
    // console.log(signup);
  };


  const handleSubmitup = (e) => {
    e.preventDefault();
    console.log(`fullname: ${signup.fullname}\n`
      + `Usuario: ${signup.Usuario}\n`
      + `email: ${signup.email}\n`
      + `password: ${signup.password}\n`)
  }

  return (
    <form action="" method="post" name="form2" onSubmit={handleSubmitup}>
      <div className="form-floating mb-3">
        <input className="form-control"
          type="text"
          name="fullname"
          placeholder=""
          value={signup.fullname}
          onChange={(ev) => handleUpOnChange(ev.target.value, "fullname")}
          required />
        <label htmlFor="fullname">Nombre completo</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control"
          type="text"
          name="Usuario"
          placeholder=""
          value={signup.Usuario}
          onChange={(ev) => handleUpOnChange(ev.target.value, "Usuario")}
          required />
        <label htmlFor="Usuario">Usuario</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control"
          type="email"
          name="email"
          placeholder=""
          value={signup.email}
          onChange={(ev) => handleUpOnChange(ev.target.value, "email")}
          required />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control"
          type="password"
          name="password2"
          placeholder=""
          value={signup.password2}
          onChange={(ev) => handleUpOnChange(ev.target.value, "password")}
          required />
        <label htmlFor="password">Contraseña</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control"
          type="password"
          name="confirmpassword"
          placeholder=""
          value={signup.confirmpassword}
          onChange={(ev) => handleUpOnChange(ev.target.value, "confirmpassword")}
          required />
        <label htmlFor="confirmpassword">Confirmar Contraseña</label>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
        <br />
        <button type="submit" className="btn btn-primary">Registrar</button>
      </div>
    </form>
  )
}
