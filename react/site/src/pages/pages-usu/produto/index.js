import { Div } from "./styled";

import Cabecalho from '../../../components/common/cabecalho/index';
import Descricao from '../../../components/styled/descricao/index';
import Botao from '../../../components/styled/button-comprar/index';
import BotaoDesejos from '../../../components/styled/button-desejos/index';
import RodaPe2 from '../../../components/common/rodaPe2/index';

export default function produto() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="conteudo">
                    <div className="esquerda">
                        <div className="img-grande">
                            <img src="/assets/images/camiseta.png" alt="" />
                        </div>

                        <div className="conjunto-imgs">
                            <div className="img">
                                <img src="/assets/images/frente.png" alt="" />
                            </div>

                            <div className="img">
                                <img src="/assets/images/verso.png" alt="" />
                            </div>

                            <div className="img">
                                <img src="/assets/images/dobrado.png" alt="" />
                            </div>

                            <div className="img">
                                <img src="/assets/images/enrrolado.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="direita">
                        <div class="f1-titulo">
                            Simples ocasional Camiseta
                        </div>

                        <div class="preco">
                            R$34,90
                        </div>

                        <div class="parcelamento">
                            6x de R$5,82 sem juros 
                        </div>

                        <Botao />
                        <BotaoDesejos />

                        <div className="t-titulo">
                            Tamanhos:
                        </div>

                        <div class="tamanhos">
                            <div class="butao">
                                PP
                            </div>

                            <div class="butao">
                                P
                            </div>

                            <div class="butao">
                                M
                            </div>

                            <div class="butao">
                                G
                            </div>

                            <div class="butao">
                                GG
                            </div>
                        </div>

                        <Descricao />
                    </div>
                </div>

                <RodaPe2 />
            </div>
        </Div>
    );
}