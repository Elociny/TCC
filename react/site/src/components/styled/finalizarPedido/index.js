import { Div } from './styled';

import { Link } from 'react-router-dom';

export default function finalizarPedido() {
    return (
        <Div>
            <div className="container">
                <div className="titu">
                    Finalizar Pedido
                </div>

                <div className="justi">
                    <div className="linha">
                        <div className="sublinhado">
                            Subtotal:
                        </div>

                        <div className="negri">
                            R$34,90
                        </div>
                    </div>

                    <div className="linha">
                        <div className="sublinhado">
                            Frete:
                        </div>

                        <div className="negri">
                            R$00,00
                        </div>
                    </div>
                </div>

                <div className="botao">
                    <Link className="link" to='/pagamento'>
                        <button>Finalizar Compra</button>
                    </Link>
                </div>
            </div>
        </Div>
    );
}