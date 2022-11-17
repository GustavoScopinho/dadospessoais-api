import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerHome } from './Home.style'
import { Link } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

export const Home = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)

  const { dadosPessoa, buscarDadosPessoa } = useContext<any>(PessoaContext)

  const { deletarUsuario } = useContext(PessoaContext)

  useEffect(() => {
    buscarDadosPessoa()
  }, [])

  useEffect(() => {
    console.log(dadosPessoa)
  }, [dadosPessoa])

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
              <table>
                <tr>
                  <th>Nome</th>
                  <th>DataNascimento</th>
                  <th>Cpf</th>
                  <th>Email</th>
                </tr>
                {dadosPessoa?.map((pessoa: any) => {
                  return (
                    <tr>
                      <th>{pessoa.idPessoa}</th>
                      <th>{pessoa.nome}</th>
                      <th>{pessoa.dataNascimento}</th>
                      <th>{pessoa.cpf}</th>
                      <th>{pessoa.email}</th>
                      <button>
                        {' '}
                        <i>
                          <FiEdit />
                        </i>
                      </button>{' '}
                      <button>
                        {' '}
                        <i>
                          <RiDeleteBin6Fill
                            onClick={() => deletarUsuario(pessoa.idPessoa)}
                          />
                        </i>{' '}
                      </button>
                    </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </ContainerHome>
    </>
  )
}
