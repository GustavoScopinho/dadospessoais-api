import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerHome } from './Home.style'
import { Link } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'

export const Home = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)

  const { dadosPessoa } = useContext<any>(PessoaContext)

  return (
    <>
      <ContainerHome>
        <div className="Container-Logout">
          <button onClick={fazerLogout}>Logout</button>
        </div>
        <div className="ContainerMenor">
          <div>
            <h1>Lista de pessoas</h1>
            <div>
              {dadosPessoa.map((pessoa: any) => {
                return <h1>{pessoa.nome}</h1>
              })}
              <Link className="button-cadastro" to="/people/create">
                {' '}
                Cadastrar Pessoa
              </Link>
            </div>
          </div>
        </div>
      </ContainerHome>
    </>
  )
}
