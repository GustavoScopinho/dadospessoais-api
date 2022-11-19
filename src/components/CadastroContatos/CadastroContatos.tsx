import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { Header } from '../Header/Header'
import { ContatosContext } from '../../Context/ContatosContext'
import { IContato, IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from './CadastrarContatos.style'
import InputMask from 'react-input-mask'

export const CadastroContatos = () => {
  const { state } = useLocation()
  console.log(state)
  const { register, handleSubmit } = useForm<IContato>()
  const { criarContatos } = useContext(ContatosContext)

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Cadastro de contato</h1>
          <div>
            <form
              onSubmit={handleSubmit(data =>
                criarContatos(data, state.idPessoa)
              )}
            >
              <select id="tipoContato" {...register('tipoContato')}>
                <option value="RESIDENCIAL">RESIDENCIAL</option>
                <option value="COMERCIAL">COMERCIAL</option>
              </select>

              <p>Telefone:</p>
              <InputMask
                mask="(99)99999-9999"
                type="text"
                id="telefone"
                {...register('telefone')}
              />
              <p>Descrição:</p>
              <input type="text" id="descricao" {...register('descricao')} />
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
