import styled from "styled-components"; 

const Div = styled.div`
    .container {
        display: flex;
        flex-direction: column;
    }

    .titulo {
        font-weight: bolder;
        font-size: 27px;
        color: #353535;

        margin-bottom: 15px;
    }

    .filtro {
        font-weight: bolder;
        font-size: 16px;
        color: #353535;

        cursor: pointer;

        margin-bottom: 7px;
    }

    .filtro:hover {
        text-decoration: underline;
    }
`;

export { Div }