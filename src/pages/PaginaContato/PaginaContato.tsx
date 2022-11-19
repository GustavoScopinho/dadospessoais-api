import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerGeral, ContainerHome } from './Contato.style'
import { Link, useNavigate } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IPessoas } from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'
import { FaAddressCard, FaAddressBook } from 'react-icons/fa'

export const PaginaContato = () => {
  const navigate = useNavigate()
  // const { dadosPessoa, buscarDadosPessoa } = useContext<any>(PessoaContext)
  // const { deletarUsuario } = useContext(PessoaContext)

  // useEffect(() => {
  //   buscarDadosPessoa()
  // }, [buscarDadosPessoa()])

  // useEffect(() => {
  //   console.log(dadosPessoa)
  // }, [dadosPessoa])

  return (
    <>
      <ContainerGeral>
        <Header />
        <ContainerHome>
          <div className="ContainerMenor">
            <h2>Lista de Contatos</h2>
            <div className="ContainerTabela">
              <div className="containerBotaoCadastro">
                <div>
                  <h3>Contato usuários</h3>
                </div>
              </div>
              <div className="classOverflow"></div>
              <table>
                <tr>
                  <th>TIPO DE CONTATO</th>
                  <th>TELEFONE</th>
                  <th>DESCRIÇÃO</th>

                  <th>↓</th>
                </tr>
                {/* {dadosPessoa?.map((pessoa: IPessoas) => {
                  return (
                    <tr>
                      <td>
                        <p>{pessoa.idPessoa}</p>
                      </td>
                      <td>
                        <p>{pessoa.nome}</p>
                      </td>
                      <td>
                        <p>{pessoa.dataNascimento}</p>
                      </td>

                      <td className="container-button">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit
                              onClick={() => {
                                navigate('/people/edit', { state: pessoa })
                              }}
                            />
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
                })} */}
              </table>
            </div>
          </div>
        </ContainerHome>
      </ContainerGeral>
    </>
  )
}
