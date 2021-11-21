import styled from "styled-components"; 

const Div = styled.div`
    .container {
        margin-top: 25px;
    }

    .nom {
        color: #353535;

        margin-bottom: 5px;
    }

    .in input {
        padding: 5px 5px 5px 5px;

        border-radius: 4px;
        border: 1px solid;

        outline: none;

        cursor: text;

        width: 407px;
    }

    .con {
        display: flex;
        flex-direction: row;
    }

    .imp {
        display: flex;
        flex-direction: row;
    }

    .imp input {
        padding: 5px 5px 5px 5px;
        margin: 0px 5px 0px 5px;

        border-radius: 4px;
        border: 1px solid;

        outline: none;

        cursor: text;

        width: 50px;
    }

    .imp2 input {
        padding: 5px 5px 5px 5px;
        margin: 0px 5px 0px 5px;

        border-radius: 4px;
        border: 1px solid;

        outline: none;

        cursor: text;

        width: 250px;
    }
`;

export { Div }