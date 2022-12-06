import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import routes from '../routes'

const AppContent = () => {
  return (
    <Routes>
        {routes.map((route,index)=>{
            return(
                route.element &&(
                    <Route key = {index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                    ></Route>
                )
            )
        })}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
    </Routes>
  )
}

export default React.memo(AppContent)
