import React from 'react'
import { AppSideBar, AppHeader, AppContent } from '../Components/Index'



export const DefaultLayout = () => {
  return (
    <div>
      <AppHeader />
      <div id="layoutSidenav">
        <AppSideBar />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  )
}


