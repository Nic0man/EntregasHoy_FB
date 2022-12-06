import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './Components/Login'
import { DefaultLayout } from "./layout/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" name="Login Page" element={<Login />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
