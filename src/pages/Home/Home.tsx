import React from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerHome } from './Home.style'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
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
