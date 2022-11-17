import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IUsuario } from '../../utilidade/interface'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const { register, handleSubmit } = useForm<IUsuario>()
  const { fazerLogin, token } = useContext(UsuarioContext)

  if (token) {
    return <Navigate to="/dashboard" />
  }
  return (
    <>
      <h1>Tela de Login</h1>
      <form onSubmit={handleSubmit(data => fazerLogin(data))}>
        <input type="text" id="login" {...register('login')} />
        <input type="password" id="senha" {...register('senha')} />
        <input type="submit" value="Entrar" />
      </form>
    </>
  )
}
