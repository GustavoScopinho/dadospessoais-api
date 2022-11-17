import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { CriarUsuario } from './pages/CriarUsuario/CriarUsuario'
import { UsuarioContext, UsuarioProvider } from './Context/UsuarioContext'
import { Login } from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import { Home } from './pages/Home/Home'
import { RotaPrivada } from './components/RotaPrivada'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <UsuarioProvider>
          <Routes>
            <Route path="/Cadastro" element={<CriarUsuario />} />
            <Route path="/" element={<Login />} />
            <Route element={<RotaPrivada />}>
              <Route path="/Home" element={<Home />} />
            </Route>
          </Routes>
        </UsuarioProvider>
      </BrowserRouter>
    </>
  )
}

export default App
