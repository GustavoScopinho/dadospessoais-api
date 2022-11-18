import React from 'react'
import { ContainerHeader } from './Header.style'
import { ContainerMenu } from './Header.style'
import imgLogo from '../../assets/logo-quadrado.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { BiLogOut } from 'react-icons/bi'

export const Header = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
  return (
    <>
      <ContainerHeader>
        <ContainerMenu>
          <i>
            <img src={imgLogo} alt="" />
          </i>
          <h3>Home</h3>
          <button onClick={fazerLogout}>
            Logout <BiLogOut size={20} />
          </button>
        </ContainerMenu>
      </ContainerHeader>
    </>
  )
}
