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

export const PessoaContext = createContext({} as IPessoaContext)

export const PessoaProvider = ({ children }: IChildren) => {
  const { token } = useContext(UsuarioContext)

  const criarDadosPessoa = async (people: IPessoas) => {
    try {
      await api.post('/pessoa', people)
      toast.success('Dados pessoais cadastrado!', toastConfig)
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
