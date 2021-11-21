import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .area {
        background-image: url("/assets/images/background.png");
        padding: 300px 0px;
    }

    .caixa {
        text-align: center;
        background-color: #3C6E71;

        border-radius: 15px;

        margin: 0px 380px;
        padding-top: 30px;
    }

    .titu {
        font-size: 37px;
        font-weight: bolder;
        color: #d9d9d9;

        margin-bottom: 15px;
    }
`;

export { Div }