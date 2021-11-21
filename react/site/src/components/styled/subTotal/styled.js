import styled from "styled-components"; 

const Div = styled.div`
    .container {
        padding: 25px 25px;

        min-width: 425px;
    }

    .linha {
        display: flex;
        flex-direction: row;

        font-size: 20px;
        color: #353535;

        justify-content: space-between;

        margin: 15px 0px;
    }

    .diferenciado {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        font-size: 20px;
        color: #353535;

        text-align: center;
        align-items: center;
    }

    .item img {
        width: 100px;
        height: auto;
    }

    .texto {
        font-weight: bolder;
    }

    span {
        font-weight: bolder;
    }
`;

export { Div }