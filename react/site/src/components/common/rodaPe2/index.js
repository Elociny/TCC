import { Div } from './styled';
import Titulo from '../titulo/index';

export default function rodaPe() {
    return (
        <Div>
            <div className="roda-pe">
                <div className="cima">
                    <div className="coluna1">
                        <div className="c-titulo">
                            FEMININO
                        </div>

                        <div className="c-info">
                            Acessórios 
                        </div>

                        <div className="c-info">
                            Blusas
                        </div>

                        <div className="c-info">
                            Calças
                        </div>

                        <div className="c-info">
                            Calçados
                        </div>
                        
                        <div className="c-info">
                            Camisas
                        </div>

                        <div className="c-info">
                            Camisetas
                        </div>

                        <div className="c-info">
                            Casacos e Jaquetas
                        </div>

                        <div className="c-info">
                            Moda Íntima    
                        </div>

                        <div className="c-info">
                            Vestidos
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            MASCULINO 
                        </div>

                        <div className="c-info">
                            Bermudas
                        </div>
                        
                        <div className="c-info">
                            Calças    
                        </div>
                        
                        <div className="c-info">
                            Camisas
                        </div>

                        <div className="c-info">
                            Camisetas
                        </div>

                        <div className="c-info">
                            Polo
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            INFANTIL
                        </div>
                        
                        <div className="c-info">
                            Bodies
                        </div>

                        <div className="c-info">
                            Calças
                        </div>

                        <div className="c-info">
                            Calçados
                        </div>

                        <div className="c-info">
                            Conjuntos
                        </div>

                        <div className="c-info">
                            Shorts
                        </div>

                        <div className="c-info">
                            Vestidos
                        </div>

                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            PLUE SIZE
                        </div>

                        <div className="c-info">
                            Blusas
                        </div>
                        
                        <div className="c-info">
                            Calças
                        </div>

                        <div className="c-info">
                            Casacos e Jaquetas
                        </div>

                        <div className="c-info">
                            Shorts e Bermudas
                        </div>

                        <div className="c-info">
                            Vestidos
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