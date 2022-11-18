import styled from 'styled-components'

export const ContainerCadastro = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  h1 {
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
  }
  p {
    padding-bottom: 10px;
  }

  .button-cadastro {
    background-color: blueviolet;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    height: 50px;
    border: none;
  }

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      width: 500px;
      height: 600px;
      border-radius: 5px;
      background-color: #fff;
      opacity: 85%;
      padding: 20px;

      h1 {
        text-align: center;
        padding-top: 10px;
      }

      form {
        display: flex;
        flex-direction: column;

        input {
          height: 40px;
          margin-bottom: 15px;
        }
      }
    }
  }
`
