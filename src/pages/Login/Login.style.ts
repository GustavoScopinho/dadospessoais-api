import styled from 'styled-components'

interface backgroundImage {
  img?: string
}

export const ContainerLogin = styled.div`
  background-image: linear-gradient(
    to top,
    #4b7bc4,
    #4f8cd4,
    #559de3,
    #5caff1,
    #64c0ff
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  .ContainerLogo {
    margin: 0px 0px 50px 0px;

    img {
      width: 150px;
      height: 150px;
      transform: translatey(0px);
      animation: float 5s ease-in-out infinite;
    }
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-30px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

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
        color: #fff;
      }
    }
  }
  a {
    color: #4044ed;
    text-decoration: none;
  }
`
