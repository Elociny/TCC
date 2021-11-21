import styled from "styled-components"; 

const Div = styled.div`
  .cabecalho {
      background-color: #3C6E71;
      color: #d9d9d9;

      padding: 15px 30px;

      display: flex;
      flex-direction: row;

      justify-content: space-between;
  }

  .conjunto {
      display: flex;
      flex-direction: row;

      justify-content: space-between;
  }

  .inp input {
    border: none;
    border-radius: 50px;
    outline: none;
    
    border: none;
    border-radius: 50px;
    outline: none;
      
    padding: 10px 10px 10px 10px;
    margin: 0px 7px;

    background-color: #609FA3;
    color: #d9d9d9;

    width: 407px;
  }

  .inp input::placeholder {
    color: #d9d9d9;
  }

  .inp input::placeholder {
    color: #d9d9d9;
  }

  .botao button {
    margin: 0px 7px;

    border: none;

    background-color: #3C6E71;

    cursor: pointer;
  }
`;

export { Div };