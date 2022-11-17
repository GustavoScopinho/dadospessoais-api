import styled from 'styled-components'

interface backgroundImage {
  img?: string
}

export const ContainerLogin = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./imagem-fundo.jpg');

  .buttonLogin {
    background-color: #4044ed;
    color: #fff;
    border: none;
    margin-top: 30px;
    cursor: pointer;

    :hover {
      scale: 1.01;
      transform: 2s;
    }
  }

  .ContainerMenor {
    width: 400px;
    height: 400px;

    h1 {
      text-align: center;
      padding-bottom: 30px;
      color: #fff;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 40px;
      margin-bottom: 10px;
      border: none;
      background: transparent;
      border-bottom: 2px solid #fff;

      ::placeholder {
        border: none;
        color: #ccc;
      }
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`
