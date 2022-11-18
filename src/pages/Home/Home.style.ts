import styled from 'styled-components'

export const ContainerHome = styled.div`
  background-image: linear-gradient(
    to top,
    #4b7bc4,
    #4f8cd4,
    #559de3,
    #5caff1,
    #64c0ff
  );
  width: 100%;
  min-height: 100vh;

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
      color: #fff;
      padding: 30px 0px;
    }

    div {
      width: 850px;
      height: 100%;
      border-radius: 5px;
      background-color: #fff;
      opacity: 95%;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
      align-items: center;
      box-shadow: 1px 1px 5px 1px #4b7bc4;

      i {
      }
    }

    .buttonTabela {
      color: #64c0ff;
      background: #fff;
      border: 1px solid #64c0ff;

      :hover {
        scale: 1.1;
        transform: 2s;
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;

      tr {
      }
      th {
        background-image: linear-gradient(
          to top,
          #4b7bc4,
          #4f8cd4,
          #559de3,
          #5caff1,
          #64c0ff
        );
        color: #fff;
        height: 54.3px;
      }
    }
    td {
      border-bottom: 1px solid #64c0ff;
      text-align: center;
      height: 65px;
      font-weight: 600;
      color: #000;
      width: 500px;
    }

    .ContainerTabela {
      border-radius: 5px;

      .containerBotaoCadastro {
        height: 50px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
  }
  button {
    padding: 5px 10px;
    margin: 5px 10px;
    border: 1px solid #fff;
    background-color: #d1dffc;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .button-cadastro {
    background-image: linear-gradient(
      to top,
      #4b7bc4,
      #4f8cd4,
      #559de3,
      #5caff1,
      #64c0ff
    );
    width: 200px;
    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    :hover {
      scale: 1.01;
    }
  }
`
