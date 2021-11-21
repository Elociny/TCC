import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .filho {
        margin: 25px 25px;
    }

    .categoria {
        display: flex;
        flex-direction: column;

        margin-bottom: 15px;
    }

    .link {
        color: #353535;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    .opcoes {
        display: flex;
        flex-direction: row;
    
        color: #353535;
    }
    
    .op1 {
        margin-right: 15px;
    
        font-size: 18px;
        color: #353535;

        cursor: pointer;
    }

    .titulo2 {
        margin: 15px 0px;
        font-weight: bolder;
        font-size: 27px;
        color: #353535;
    }

    .row { 
        display: flex;
        flex-direction: row;
    }

    .imagem {
        cursor: pointer;
    }
`;

export { Div };