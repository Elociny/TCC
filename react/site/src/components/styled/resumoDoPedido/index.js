import { Div } from './styled';

export default function resumoDoPedido() {
    return (
        <Div>
            <div className="container">
                <div className="titu">
                    Resumo do Pedido
                </div>

                <div className="aglomerado">
                    <div className="sei">
                        <div className="titul">
                            Produto
                        </div>

                        <div className="img">
                            <img src="/assets/images/camiseta.png" alt="" />
                        </div>
                    </div>

                    <div className="sei">
                        <div className="titul">
                            Tamanho
                        </div>

                        <div className="borda">
                            GG
                        </div>
                    </div>

                    <div className="sei">
                        <div className="titul">
                            Preço
                        </div>

                        <div className="preco">
                            R$34,90
                        </div>
                    </div>

                    <div className="sei">
                        <div className="titul">
                            Quantidade
                        </div>

                        <div className="contador">
                        </div>
                    </div>

                    <div className="sei">
                        <div className="titul">
                            Total
                        </div>

                        <div className="preco">
                            R$34,90
                        </div>
                    </div>
                </div>

                <div className="botao">
                    <button>EXCLUIR</button>
                </div>
            </div>
        </Div>
    );
}