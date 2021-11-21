import { Div } from './styled';

export default function Desejos() {
    return(
        <Div>
            <div className="container">
                <div class="quadrado">
                    <div class="img">
                        <img src="/assets/images/camiseta.png" alt="" />
                    </div>

                    <div class="infos">
                        <div class="titulo">
                            Simples ocasional Camiseta
                        </div>

                        <div class="preco">
                            R$34,90
                        </div>

                        <div class="parcelamento">
                            6x de R$5,82 sem juros 
                        </div>

                        <div class="excluir">
                            <button>EXCLUIR</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </Div>
    );
}