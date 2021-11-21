import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .area {
        padding: 25px 25px;

        display: flex;
        flex-direction: row;
    }

    .direita {
        display: flex;
        flex-direction: column;
    }

    .tituluzin {
        margin-bottom: 15px;
        font-weight: bolder;
        font-size: 27px;
        color: #353535;
    }

    .sub {
        margin-bottom: 15px;
        font-size: 18px;
        color: #353535;
    }
`;

export { Div }