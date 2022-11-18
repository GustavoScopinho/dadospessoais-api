import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { CriarUsuario } from './pages/CriarUsuario/CriarUsuario'
import { UsuarioContext, UsuarioProvider } from './Context/UsuarioContext'
import { Login } from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import { Home } from './pages/PaginaUsuarios/Home'
import { RotaPrivada } from './components/RotaPrivada'
import { PessoaProvider } from '../src/Context/PessoaContext'
import { CadastroDePessoas } from './pages/CadastroDePessoas/CadastroDePessoas'
import { EditaPessoa } from './pages/EditaPessoa'
import { PaginaEndereco } from './pages/PaginaEndereco/PaginaEndereco'
import { PaginaContato } from './pages/PaginaContato/PaginaContato'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <UsuarioProvider>
          <PessoaProvider>
            <Routes>
              <Route path="/Cadastro" element={<CriarUsuario />} />
              <Route path="/" element={<Login />} />
              <Route element={<RotaPrivada />}>
                <Route path="/Home" element={<Home />} />
                <Route path="/PaginaEndereco" element={<PaginaEndereco />} />
                <Route path="/PaginaContato" element={<PaginaContato />} />
                <Route path="/people/create" element={<CadastroDePessoas />} />
                <Route path="/people/edit" element={<EditaPessoa />} />
              </Route>
            </Routes>
          </PessoaProvider>
        </UsuarioProvider>
      </BrowserRouter>
    </>
  )
}

export default App
