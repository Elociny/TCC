import styled from "styled-components"; 

const Div = styled.div`
    .container {
        color: #353535;

        margin: 0px 25px;
    }

    .titu {
        font-size: 22px;
        font-weight: bolder;

        margin-bottom: 25px;

        text-align: center;
    }

    .justi {
        margin-bottom: 10px;
    }

    .linha {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    .sublinhado {
        text-decoration: underline;
    }

    .negri {
        font-weight: bolder;
    }

    .botao button {
        border-radius: 18px;
        border: none;

        padding: 10px 65px;
        margin-top: 30px;

        color: #d9d9d9;
        font-weight: bolder;

        background-color: #3C6E71;

        cursor: pointer;
    }

    .botao button:hover {
        background-color: #609FA3;
        color: #353535;
    }
`;

export { Div };