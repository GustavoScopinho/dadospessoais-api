import { createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import { api } from '../utilidade/api'
import {
  IPessoaContext,
  toastConfig,
  IChildren,
  IPessoas
} from '../utilidade/interface'
import { UsuarioContext } from './UsuarioContext'
import { useNavigate, Navigate } from 'react-router-dom'

export const PessoaContext = createContext({} as IPessoaContext)

export const PessoaProvider = ({ children }: IChildren) => {
  const { token } = useContext(UsuarioContext)
  const navigate = useNavigate()

  const criarDadosPessoa = async (people: IPessoas) => {
    try {
      await api.post('/pessoa', people)
      toast.success('Dados pessoais cadastrado!', toastConfig)
      navigate('/Home')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado, tente novamente', toastConfig)
    }
  }

  return (
    <PessoaContext.Provider value={{ criarDadosPessoa }}>
      {children}
    </PessoaContext.Provider>
  )
}
