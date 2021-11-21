import { Div } from "./styled";

export default function Pedidos() {
    return(
        <Div>
            <div className="conteudo">
                <div className="imagem">
                    <img src="/assets/images/camiseta.png" alt="" />
                </div>

                <div className="direita">
                    <div className="tit">
                        Simples ocasional Camiseta
                    </div>

                    <div className="sub-tit">
                        Entregue dia xx
                    </div>
                </div>
            </div>
        </Div>
    );
}