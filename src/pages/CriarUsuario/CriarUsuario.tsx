import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { IUsuario } from '../../utilidade/interface'

export const CriarUsuario = () => {
  const { register, handleSubmit } = useForm<IUsuario>()
  const { CriarNovoUsuario } = useContext(UsuarioContext)

  useEffect(() => {
    console.log({ register })
  }, [])

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(data => CriarNovoUsuario(data))}>
        <input type="text" id="login" {...register('login')} />
        <input type="password" id="senha" {...register('senha')} />
        <input type="submit" value="Criar novo usuário" />
      </form>
    </>
  )
}
