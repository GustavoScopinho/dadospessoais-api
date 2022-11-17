import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IUsuario } from '../../utilidade/interface'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { Navigate } from 'react-router-dom'
import { ContainerLogin } from './Login.style'
import backgroundImage from '../../assets/imagem-fundo.jpg'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { register, handleSubmit } = useForm<IUsuario>()
  const { fazerLogin, token } = useContext(UsuarioContext)

  if (token) {
    return <Navigate to="/Home" />
  }
  return (
    <>
      <ContainerLogin
        className="overlay"
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="ContainerMenor">
          <h1>Tela de Login</h1>
          <form onSubmit={handleSubmit(data => fazerLogin(data))}>
            <input
              type="text"
              id="login"
              placeholder="Username"
              {...register('login')}
            />
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              {...register('senha')}
            />
            <input className="buttonLogin" type="submit" value="Entrar" />
          </form>
          <Link to="/Cadastro">Clique aqui para cadastrar!</Link>
        </div>
      </ContainerLogin>
    </>
  )
}
