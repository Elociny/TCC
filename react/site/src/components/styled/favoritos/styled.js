import styled from "styled-components"; 

const Div = styled.div`
    .quadrado {
        display: flex;
        flex-direction: row;

        margin-top: 20px;
    }

    .infos {
        margin-left: 55px;
    }

    .titulo {
        font-size: 20px;
        font-weight: bolder;
        color: #353535;

        margin-bottom: 10px;
    }

    .preco {
        font-size: 25px;
        font-weight: bolder;
        color: #353535;

        margin-bottom: 10px;
    }

    .parcelamento {
        font-size: 14px;
        font-weight: bolder;
        color: #353535;

        margin-bottom: 60px;
    }

    .excluir button {
        background-color: white;
        border-color: #3C6E71;
        border-radius: 50px;
        border-width: 1.5px;

        padding: 5px 8px;

        cursor: pointer;
    }

    .excluir button:hover {
        background-color: #d9d9d9;
    }

    hr {
        width: 100%;
        height: 4px;

        background-color: #353535;
        border: none;
        border-radius: 5px;

        margin-top: 20px;
    }
`;

export { Div }