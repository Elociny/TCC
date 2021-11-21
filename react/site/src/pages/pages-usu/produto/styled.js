import styled from "styled-components"; 

const Div = styled.div`
    .container {
        user-select: none; 
    }

    .conteudo {
        display: flex;
        flex-direction: row;

        margin: 25px 25px;
    }

    .esquerda {
        margin-right: 40px;
    }

    .img-grande {
        text-align: center;
    }

    .img-grande img {
        width: 300px;
        height: 300px;
    }

    .conjunto-imgs {
        display: flex;
        flex-direction: row;
    }

    .img img {
        width: 100px;
        height: 85px;

        margin: 0px 15px;
    }

    .f1-titulo {
        font-size: 27px;
        color: #353535;
        font-weight: bolder;
    
        margin-bottom: 30px;
    }
    
    .preco {
        font-size: 20px;
        color: #353535;
        font-weight: bolder;
    
        margin-bottom: 10px;
    }
    
    .parcelamento {
        font-size: 17px;
        color: #353535;
        font-weight: bolder;
    
        margin-bottom: 15px;
    }

    .tamanhos {
        display: flex;
        flex-direction: row;
    }

    .t-titulo {
        color: #353535;
        font-size: 17px;
        font-weight: bolder;

        margin-bottom: 10px;
    }

    .butao {
        text-align:center;
        border: 1px solid;
        border-color: #353535;
        color: #353535;
        border-radius: 4px;
    
        margin: 5px 5px;
        margin-bottom: 15px;
        padding: 5px 5px;

        cursor: pointer;
    }
`;

export { Div }