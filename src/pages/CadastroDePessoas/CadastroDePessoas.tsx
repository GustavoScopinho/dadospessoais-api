import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PessoaContext } from '../../Context/PessoaContext'
import { IPessoas } from '../../utilidade/interface'

export const CadastroDePessoas = () => {
  const { register, handleSubmit } = useForm<IPessoas>()
  const { criarDadosPessoa } = useContext(PessoaContext)

  return (
    <>
      <h1>Cadastro de pessoas</h1>
      <form onSubmit={handleSubmit((data: IPessoas) => criarDadosPessoa(data))}>
        <input type="text" id="nome" {...register('nome')} />
        <input
          type="date"
          id="dataNascimento"
          {...register('dataNascimento')}
        />
        <input type="text" id="cpf" {...register('cpf')} />
        <input type="text" id="email" {...register('email')} />
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  )
}
