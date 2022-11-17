import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { IUsuario } from '../../utilidade/interface'
import backgroundImage from '../../assets/imagem-fundo.jpg'
import { ContainerRegister } from './CriarUsuario.style'
import { yupResolver } from '@hookform/resolvers/yup'
import { userFormSchema } from '../../utilidade/schemas'

export const CriarUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUsuario>({
    resolver: yupResolver(userFormSchema)
  })
  const { CriarNovoUsuario } = useContext(UsuarioContext)

  useEffect(() => {
    console.log({ register })
  }, [])

  return (
    <>
      <ContainerRegister
        className="overlay"
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="ContainerMenor">
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(data => CriarNovoUsuario(data))}>
            <input type="text" id="login" {...register('login')} />
            {errors && <p>{errors.login?.message}</p>}
            <input type="password" id="senha" {...register('senha')} />
            {errors && <p>{errors.senha?.message}</p>}
            <input
              className="buttonLogin"
              type="submit"
              value="Criar novo usuário"
            />
          </form>
        </div>
      </ContainerRegister>
    </>
  )
}
