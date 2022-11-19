import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../utilidade/api'
import nProgress from 'nprogress'
import {
  IContatoContext,
  toastConfig,
  IChildren,
  IPessoas,
  IContato
} from '../utilidade/interface'

import { useNavigate, Navigate } from 'react-router-dom'

export const ContatosContext = createContext({} as IContatoContext)

export const ContatosProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const criarContatos = async (contato: IContato, idPessoa: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token
      await api.post(`/contato/${idPessoa}`, contato)
      toast.success('Usuário cadastrado com sucesso', toastConfig)
    } catch (error) {
      toast.error('Algo deu errado, tente novamente', toastConfig)
      console.error(console.log)
    }
  }

  return (
    <ContatosContext.Provider value={{ criarContatos }}>
      {children}
    </ContatosContext.Provider>
  )
}
