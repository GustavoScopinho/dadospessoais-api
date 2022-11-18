import styled from 'styled-components'

export const ContainerHome = styled.div`
  background-color: blueviolet;
  width: 100%;
  min-height: 100vh;

  .ContainerMenor {
    display: flex;
    justify-content: center;

    div {
      width: 850px;
      height: 100%;
      border-radius: 5px;
      background-color: #fff;
      opacity: 85%;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;

      h1 {
        text-align: center;
        padding: 10px 0px;
      }
    }
    .buttonTabela {
      :hover {
        scale: 1.01;
        transform: 2s;
        color: blueviolet;
        background: #fff;
        border: 1px solid blueviolet;
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;

      tr {
      }
      th {
        background-color: #9f82d8;
        color: #fff;
        height: 54.3px;

        background: #000;
      }
    }
    td {
      border-bottom: 1px solid #7c7c9a;
      text-align: center;
      height: 65px;
      font-weight: 600;
      color: #000;
      width: 500px;
    }
    .container-button {
      background-color: #000;
    }
  }
  button {
    padding: 5px 10px;
    margin: 5px 10px;
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .button-cadastro {
    background-color: blueviolet;

    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    :hover {
      scale: 1.05;
    }
  }
`
