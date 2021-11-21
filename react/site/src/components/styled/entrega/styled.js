import styled from "styled-components"; 

const Div = styled.div`
    .titut {
        font-weight: bolder;
        font-size: 27px;
        color: #353535;

        margin: 15px 0px;
    }

    .entrega {
        background-color: white;
        border: 1px solid;
        border-color: #353535;
        border-radius: 8px;

        padding: 15px 25px;

        max-width: 425px;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .nom {
        color: #353535;

        margin-bottom: 5px;
    }

    .dados {
        margin: 10px 5px 0px 0px;
    }

    .input2 input {
        padding: 5px 5px 5px 5px;

        border-radius: 4px;
        border: 1px solid;

        outline: none;

        cursor: text;

        width: 195px;
    }

    .dad {
        margin: 10px 5px 10px 0px;
    }

    .input input {
        padding: 5px 5px 5px 5px;

        border-radius: 4px;
        border: 1px solid;

        outline: none;

        cursor: text;

        width: 407px;
    }
`;

export { Div }