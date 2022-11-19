import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerGeral, ContainerHome } from './Endereco.style'
import { Link, useNavigate } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IEndereco, IEnderecoContext} from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'
import { FaAddressCard, FaAddressBook } from 'react-icons/fa'
import { EnderecoContext } from '../../Context/EnderecoContext'

export const PaginaEndereco = () => {
  const navigate = useNavigate()
  // const { dadosEndereco,  listaEnderecos } = useContext<any>(EnderecoContext);
  const { deletarUsuario } = useContext(PessoaContext)

  // useEffect(() => {
  //   listaEnderecos()
  // }, [listaEnderecos])

  return (
    <>
      <ContainerGeral>
        <Header />
        <ContainerHome>
          <div className="ContainerMenor">
            <h2>Lista de Endereço</h2>
            <div className="ContainerTabela">
              <div className="containerBotaoCadastro">
                <div>
                  <h3>Endereços usuários</h3>
                </div>
              </div>
              <div className="classOverflow"></div>
              <table>
                <tr>
                  <th>TIPO</th>
                  <th>lOGRADOURO</th>
                  <th>NUMERO</th>
                  <th>COMPLEMENTO</th>
                  <th>CEP</th>
                  <th>CIDADE</th>
                  <th>ESTADO</th>
                  <th>PAIS</th>
                  <th>↓</th>
                </tr>
                {/* {dadosEndereco?.map((endereco: IEndereco) => {
                  return (
                    <tr>
                      <td>
                        <p>{endereco.idPessoa}</p>
                      </td>
                      <td>
                        <p>{endereco.tipo}</p>
                      </td>
                      <td>
                        <p>{endereco.logradouro}</p>
                      </td>
                      <td>
                        <p>{endereco.numero}</p>
                      </td>
                      <td>
                        <p>{endereco.complemento}</p>
                      </td>
                      <td>
                        <p>{endereco.cep}</p>
                      </td>
                      <td>
                        <p>{endereco.cidade}</p>
                      </td>
                      <td>
                        <p>{endereco.estado}</p>
                      </td>
                      <td>
                        <p>{endereco.pais}</p>
                      </td>
                      <td className="container-button">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit
                              onClick={() => {
                                // navigate('/people/edit', { state: pessoa })
                              }}
                            />
                          </i>
                        </button>

                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <RiDeleteBin6Fill
                              onClick={() => deletarUsuario(endereco.idPessoa)}
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
