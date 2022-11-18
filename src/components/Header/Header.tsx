import React from 'react'
import { ContainerHeader } from './Header.style'
import { ContainerMenu } from './Header.style'
import imgLogo from '../../assets/logo-quadrado.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
  return (
    <>
      <ContainerHeader>
        <ContainerMenu>
          <i>
            <img src={imgLogo} alt="" />
          </i>
          <Link to="/">
            <h3>Lista de cadastro</h3>
          </Link>
          <button onClick={fazerLogout}>
            Logout <BiLogOut size={20} />
          </button>
        </ContainerMenu>
      </ContainerHeader>
    </>
  )
}
