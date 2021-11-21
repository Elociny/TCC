import styled from "styled-components"; 

const Div = styled.div`
    .link {
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
        color: #353535;
    }

    .f1-caixa {
        text-align: center;

        margin: 55px 55px;

        cursor: pointer;
    }

    .f1-nome {
        font-size: 14px;

        color: #353535;

        margin: 14px 0px;
    }

    .f1-preco {
        font-size: 19px;
        font-weight: bolder;

        color: #353535;
    }
`;

export { Div }

