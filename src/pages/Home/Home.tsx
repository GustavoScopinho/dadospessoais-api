import React from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'

export const Home = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
  return (
    <>
      <h1>Home</h1>
      <button onClick={fazerLogout}>Fazer Logout</button>
    </>
  )
}
