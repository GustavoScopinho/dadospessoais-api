import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 100%;
  background-color: #000;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
`

export const ContainerMenu = styled.div`
  width: 80%;
  height: 90px;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: blueviolet;
  background: #000;

  h3 {
    color: #fff;

    :hover {
      color: #64c0ff;
    }
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
    color: red;
    cursor: pointer;
  }
`
