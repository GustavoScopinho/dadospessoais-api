import React from 'react'
import { ContainerHeader } from './Header.style'
import { ContainerMenu } from './Header.style'
import imgLogo from '../../assets/logo-quadrado.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'

export const Header = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
  return (
    <>
      <ContainerHeader>
        <ContainerMenu>
          <i>
            <img src={imgLogo} alt="" />
          </i>
          <h1>Home</h1>
          <button onClick={fazerLogout}>Logout</button>
        </ContainerMenu>
      </ContainerHeader>
    </>
  )
}
