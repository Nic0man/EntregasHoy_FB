import React from 'react'

const AppHeader = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*<!-- Navbar Brand-->*/}
            <a className="navbar-brand ps-3" href="index.html">EntregasHoy</a>
            {/*<!-- Sidebar Toggle-->*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/*<!-- Navbar Search-->*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Busqueda" aria-label="Busqueda" aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/*<!-- Navbar-->*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Configuración</a></li>
                        <li><a className="dropdown-item" href="#!">Registros</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Cierre de Sesión</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
  )
}

export default AppHeader
