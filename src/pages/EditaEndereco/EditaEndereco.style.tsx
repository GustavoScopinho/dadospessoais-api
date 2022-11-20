import styled from "styled-components";

export const ContainerCadastro = styled.div`
  background: rgb(28,32,59);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 9%;

  h1 {
    margin-bottom: 2%;
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
  }
  p {
font-weight: 500;
    color: #fff;
    padding-bottom: 10px;
  }

  }

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      width: 500px;
      height: 690px;
      border-radius: 10px;
      background-color: #323238;;
      opacity: 85%;
      padding: 20px;
      box-shadow: 1px 1px 10px 2px #4b7bc4;

      h1 {
        text-align: center;
        padding-top: 10px;
      }

      select{
        padding-left: 2%;
        background:  #c4c4cc;
          height: 40px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: none;
      }

      form {
        display: flex;
        flex-direction: column;

        input {
        padding-left: 2%;
        background:  #c4c4cc;
        height: 40px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: none;
        }
        button{
        background: rgb(28,32,59);
        margin-top: 5%;
        border-radius: 8px;
        text-decoration: none;
        padding: 5px 10px;
        text-align: center;
        font-weight: 600;
        color: #fff;
        padding-bottom: 5px;
        cursor: pointer;
        height: 50px;
        border: none;
    :hover {
      scale: 1.01;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
      }
    }
  }
`;
