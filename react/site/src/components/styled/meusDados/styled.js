import styled from "styled-components"; 

const Div = styled.div`
    .f1-quadrado1 {
        margin-right: 25px;
    }

    .f1-titulo {
        margin-bottom: 15px;
        font-weight: bolder;
        font-size: 27px;
        color: #353535;
    }

    .meusDados {
        display: flex;
        flex-direction: column;

        padding: 20px 20px;

        border-radius: 4px;

        background-color: rgba(60, 110, 113, 0.31);
    }

    .aglomerado1 {
        display: flex;
        flex-direction: row;

        color: #353535;
    }

    .A1-nome {
        margin-left: 10px;
    }

    .f1-nome {
        font-size: 27px;
        font-weight: bolder;

        color: #353535;

        cursor: pointer;
    }

    .sair button {
        margin-top: 65px;

        color: #353535;

        background-color: rgba(60, 110, 113, 0);
        border: none;
        font-weight: bolder;
    }

    .sair button:hover {
        cursor: pointer;

        text-decoration: underline;
    }

    .link {
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    .mConta {
        font-weight: bolder;
        font-size: 20px;

        margin-top: 15px;

        color: #353535;

        cursor: pointer;
    }

    .mConta:hover {
        text-decoration: underline;
    }
`;

export { Div }