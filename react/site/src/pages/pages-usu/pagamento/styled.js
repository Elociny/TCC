import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .area {
        padding: 25px 25px;

        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    .bo {
        text-align: right;
    }

    .bo button {
        background-color: #3C6E71;
        color: #d9d9d9;

        padding: 10px 15px;
        margin: 10px 0px;

        border-radius: 5px;
        border: none;

        font-weight: bolder;
        font-size: 20px;

        cursor: pointer;
    }

    .bo button:hover {
        background-color: #609FA3;
        color: #353535;
    }
`;

export { Div }