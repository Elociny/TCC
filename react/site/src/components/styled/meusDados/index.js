import { Div } from './styled';

import { Link } from 'react-router-dom';

export default function dados() {
    return (
        <Div>
            <div className="dados">
                <div className="f1-quadrado1">
                    <div className="f1-titulo">
                        Meus Dados
                    </div>

                    <div className="meusDados">
                        <div className="f1-MDcaixa">
                            <div className="aglomerado1">
                                <div className="img">
                                    <img src="/assets/images/perfil2.png" alt=""/>
                                </div>

                                <div className="A1-nome">
                                    <div className="f1-nome">
                                        Nome
                                    </div>

                                    <div className="sair">
                                        <Link className="link" to='/login'>
                                            <button>Sair</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <Link className="link" to='/minha-conta'>
                            <div className="mConta">
                                Minha Conta
                            </div>
                        </Link>

                        <Link className="link" to='/meus-pedidos'>
                            <div className="mConta">
                                Meus Perdidos
                            </div>
                        </Link>

                        <Link className="link" to='/lista-de-desejos'>
                            <div className="mConta">
                                Lista De Desejos
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Div>
    );
}