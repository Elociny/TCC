import styled from "styled-components"; 

const Div = styled.div`
    .titu {
        font-size: 22px;
        font-weight: bolder;
        color: #353535;

        margin-bottom: 25px;
    }

    .aglomerado {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    .sei {
        text-align: center;

        margin: 5px 15px;
    }

    .titul {
        font-size: 19px;
        font-weight: bolder;
        color: #353535;

        margin-bottom: 10px;
    }

    .img img {
        width: 100px;
        height: auto;
    }

    .borda {
        background-color: white;

        text-align: center;

        border: 2px solid;
        border-color: #3C6E71;
        border-radius: 50px;

        padding: 5px 10px;
    }

    .preco {
        font-size: 16px;
        font-weight: bolder;

        color: #353535;

        padding: 5px 10px;
    }

    .botao {
        text-align: right;
    }

    .botao button {
        border-radius: 18px;
        border-color: #3C6E71;

        padding: 10px 20px;
        margin-top: 30px;

        color: #353535;
        font-weight: bolder;

        background-color: white;

        cursor: pointer;
    }

    .botao button:hover {
        background-color: #d9d9d9;
        color: #353535;
    }
`;

export { Div };