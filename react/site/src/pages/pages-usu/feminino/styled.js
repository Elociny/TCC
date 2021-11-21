import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .row {
        margin: 25px 25px;

        display: flex;
        flex-direction: row;
    }

    .wrap {
        display: flex;
        flex-wrap: wrap;
    }
`;

export { Div }