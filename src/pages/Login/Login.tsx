import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
  const { register, handleSubmit } = useForm<Usuario>()

  return (
    <>
      <h1>Tela de Login</h1>
      <form onSubmit={handleSubmit(data =>)}>
        <input type="text" name="login" id="login" />
        <input type="password" name="senha" id="senha" />
        <input type="submit" value="Criar novo usuário" />
      </form>
    </>
  )
}
