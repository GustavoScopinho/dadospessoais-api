import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 20%;
  background-color: #000;

  display: flex;

  border-bottom: 1px solid #fff;
  align-items: center;
  flex-direction: column;

  .ContainerLogout {
    width: 100%;

    .iconLogout {
      margin: 10px;
      cursor: pointer;
    }
  }
`

export const ContainerMenu = styled.div`
  width: 80%;
  height: 90px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  background: #000;

  img {
    width: 100px;
  }

  .containerIcon {
    width: 100%;
    margin-top: 50px;
  }

  button {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #64c0ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    :hover {
      scale: 1.02;
      transform: 2s;
    }
  }
  a {
    text-decoration: none;
    color: #fff;

    cursor: pointer;
  }

  p {
    color: #c4c4cc;
    padding: 5px 0px;
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }
  }
`
