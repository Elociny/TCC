import styled from "styled-components"; 

const Div = styled.div`
    .titut {
        font-weight: bolder;
        font-size: 27px;
        color: #353535;

        margin: 15px 0px;
    }

    .area {
        background-color: white;
        border: 1px solid;
        border-color: #353535;
        border-radius: 8px;

        max-width: 425px;
    }

    .botoes {
        display: flex;
        flex-direction: row;

        justify-content: space-around;
    }
    
    .bot {
        text-align: center;
    }

    .bot img {
        height: 50px;
        width: 50px;
    }
    
    .bot button {
        background-color: white;
    
        border-width: 1px;
        border-radius: 5px;
    
        padding: 5px 25px;
        margin: 0px 15px;

        cursor: pointer;
    }
    
    .bot button:focus {
        background-color: #3C6E71;
        border-color: #d9d9d9;
    }
`;

export { Div }