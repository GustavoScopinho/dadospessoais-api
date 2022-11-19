import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { PessoaContext } from '../../Context/PessoaContext'
import { IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from './CadastrarPessoas.style'
import { yupResolver } from '@hookform/resolvers/yup'
import { CadastroDePessoasSchema } from '../../utilidade/schemas'
import InputMask from 'react-input-mask'

export const CadastroDePessoas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IPessoas>({
    resolver: yupResolver(CadastroDePessoasSchema)
  })
  const { criarDadosPessoa } = useContext(PessoaContext)

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Cadastro de pessoas</h1>
          <div>
            <p>Digite seu nome:</p>
            <form
              onSubmit={handleSubmit((data: IPessoas) =>
                criarDadosPessoa(data)
              )}
            >
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                {...register('nome')}
              />
              {errors && <p>{errors.nome?.message}</p>}
              <p>Data de nascimento:</p>
              <input
                type="date"
                id="dataNascimento"
                {...register('dataNascimento')}
              />
              {errors && <p>{errors.dataNascimento?.message}</p>}
              <p>CPF:</p>
              <InputMask
                mask="999.999.999-99"
                type="text"
                id="cpf"
                {...register('cpf')}
              />
              <input
                type="text"
                id="cpf"
                placeholder="Digite seu cpf"
                {...register('cpf')}
              />
              {errors && <p>{errors.cpf?.message}</p>}
              <p>Email:</p>
              <input
                type="text"
                id="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              {errors && <p>{errors.email?.message}</p>}
              <input
                className="button-cadastro"
                type="submit"
                value="Cadastrar"
              />
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  )
}
