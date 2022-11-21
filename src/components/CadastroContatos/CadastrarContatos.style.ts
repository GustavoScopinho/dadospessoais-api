import styled from 'styled-components'

export const ContainerCadastro = styled.div`
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
  display: flex;
  justify-content: center;

  h1 {
    margin-bottom: 2%;
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
  }
  p {
    padding-bottom: 10px;
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
    border-radius: 5px;
    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    height: 50px;
    border: none;
    :hover {
      scale: 1.01;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      width: 500px;
      min-height: 400px;
      border-radius: 5px;

      opacity: 90%;
      padding: 20px;
      box-shadow: 1px 1px 10px 2px #4b7bc4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        text-align: center;
        padding-top: 10px;
      }

      form {
        display: flex;
        flex-direction: column;

        input {
          padding-left: 2%;
          background: #c4c4cc;
          height: 40px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: none;
        }
      }
      select {
        padding-left: 2%;
        background: #c4c4cc;
        height: 40px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: none;
      }
    }
  }
`
