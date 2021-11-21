import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .area {
        padding: 25px 25px;
    }

    .d-titulo {
        font-weight: bolder;
        font-size: 30px;
        color: #353535;

        margin-bottom: 20px;
    }

    .conj {
        display: flex;
        flex-direction: column;
    }

    .tit {
        font-weight: bolder;
        font-size: 18px;
        color: #353535;

        margin-bottom: 10px;
    }
`;

export { Div }