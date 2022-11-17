import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from './CadastrarPessoas.style'

export const CadastroDePessoas = () => {
  const { register, handleSubmit } = useForm<IPessoas>()
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
              <p>Data de nascimento:</p>
              <input
                type="date"
                id="dataNascimento"
                {...register('dataNascimento')}
              />
              <p>CPF:</p>
              <input
                type="text"
                id="cpf"
                placeholder="Digite seu cpf"
                {...register('cpf')}
              />
              <p>Email:</p>
              <input
                type="text"
                id="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
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
