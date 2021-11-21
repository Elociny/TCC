import { Div } from './styled';

import Cartao from '../../styled/cartao/index';
import Boleto from '../../styled/boleto/index';

export default function pagamento() {
    return (
        <Div>
            <div className="container">
                <div className="titut">
                    Pagamento
                </div>

                <div className="area">
                    <div className="dados">
                        <div className="botoes">
                            <div className="bot">
                                <button>
                                    <img src="/assets/images/boleto2.png" alt="" />
                                </button>
                            </div>

                            <div className="bot">
                                <button>
                                    <img src="/assets/images/cartao.png" alt="" />
                                </button>
                            </div>
                        </div>

                        <Cartao />
                        <Boleto />
                    </div>
                </div>
            </div>
        </Div>
    );
}