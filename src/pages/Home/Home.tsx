import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerHome } from './Home.style'
import { Link, useNavigate } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IPessoas } from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'

export const Home = () => {
  const navigate = useNavigate();
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
      <Header />
      <ContainerHome>
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
                  <th>ID</th>
                  <th>NOME</th>
                  <th>DATA DE NASCIMENTO</th>
                  <th>CPF</th>
                  <th>EMAIL</th>
                  <th>↓</th>
                </tr>
                {dadosPessoa?.map((pessoa: IPessoas) => {
                  return (
                    <tr>
                      <td>{pessoa.idPessoa}</td>
                      <td>{pessoa.nome}</td>
                      <td>{pessoa.dataNascimento}</td>
                      <td>{pessoa.cpf}</td>
                      <td>{pessoa.email}</td>
                      <td className="container-button">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit  onClick={() => {navigate("/people/edit", { state: pessoa })}}/>
                          </i>
                        </button>
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <RiDeleteBin6Fill
                              onClick={() => deletarUsuario(pessoa.idPessoa)}
                            />
                          </i>{' '}
                        </button>
                      </td>
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
