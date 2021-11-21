import { Div } from './styled';
import Titulo from '../titulo/index';

export default function rodaPe() {
    return (
        <Div>
            <div className="roda-pe">
                <div className="cima">
                    <div className="coluna1">
                        <div className="c-titulo">
                            INFORMAÇÕES DA EMPRESA
                        </div>

                        <div className="c-info">
                            Sobre ecommodas  
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            AJUDA E SUPORTE     
                        </div>

                        <div className="c-info">
                            Preço De Envio
                        </div>

                        <div className="c-info">
                            Devolução
                        </div>

                        <div className="c-info">
                            Como Pedir
                        </div>

                        <div className="c-info">
                            Como Rastrear
                        </div>

                        <div className="c-info">
                            Guia De Tamanhos
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            ATENDIMENTO AO CLIENTE     
                        </div>

                        <div className="c-info">
                            Contate-Nos
                        </div>

                        <div className="c-info">
                            Método De Pagamento
                        </div>
                    </div>

                    <div className="coluna4">
                        <div className="pt-1">
                            <div className="c-titulo">
                                ENCONTRE-NOS EM:    
                            </div>

                            <div className="c-img">
                                <div className="img1">
                                    <img src="/assets/images/facebook.png" alt="" />
                                </div>

                                <a href="https://twitter.com/ecommodas?t=XDvELDP9lM1EXZ6N7zKuPw&s=09">
                                    <div className="img1">
                                        <img src="/assets/images/twitter.png" alt="" />
                                    </div>
                                </a>
                                
                                <a href="https://www.instagram.com/eecommodas/?utm_medium=copy_link">
                                    <div className="img1">
                                        <img src="/assets/images/instagram.png" alt="" />
                                    </div>
                                </a>

                                <div className="img1">
                                    <img src="/assets/images/pinterest.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="c-titulo">
                                PAGAMENTO:
                            </div>
                            
                            <div className="c-img">
                                <div className="img1">
                                    <img src="/assets/images/cartao1.png" alt="" />
                                </div>

                                <div className="img1">
                                    <img src="/assets/images/visa.png" alt="" />
                                </div>

                                <div className="img1">
                                    <img src="/assets/images/paypal.png" alt="" />
                                </div>

                                <div className="img1">
                                    <img src="/assets/images/boleto.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="baixo">
                    <Titulo />
                </div>
            </div>
        </Div>
    );
}