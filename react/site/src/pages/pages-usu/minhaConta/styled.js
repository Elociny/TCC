import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .conteudo {
        padding: 25px 25px;

        display: flex;
        flex-direction: row;
    }

    .column {
        display: flex;
        flex-direction: column;
    }
`;

export { Div }