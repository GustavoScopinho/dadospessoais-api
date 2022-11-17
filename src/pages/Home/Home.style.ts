import styled from 'styled-components'

export const ContainerHome = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 100vh;

  .ContainerMenor {
    display: flex;
    justify-content: center;

    div {
      width: 500px;
      height: 600px;
      border-radius: 5px;
      background-color: #fff;
      opacity: 80%;
      display: flex;
      flex-direction: column;

      h1 {
        text-align: center;
        padding-top: 10px;
      }
    }
  }
  button {
    padding: 5px 10px;
    margin: 10px;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .button-cadastro {
    background-color: blueviolet;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
`
