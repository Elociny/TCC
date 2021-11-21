import { Div } from './styled';

import { Link } from 'react-router-dom';

import Cabecalho from '../../../components/common/cabecalho/index';
import DadosPessoais from '../../../components/styled/dadosPessoais/index';
import Entrega from '../../../components/styled/entrega/index';
import Pagamento from '../../../components/styled/pagamento/index';
import SubTotal from '../../../components/styled/subTotal/index';

export default function pagamento() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <div className="esquerda">
                        <DadosPessoais />
                        <Entrega />
                        <Pagamento />

                        <div className="bo">
                            <Link className="link" to='/pedido-confirmado'>
                                <button>Finalizar Compra</button>
                            </Link>
                        </div>
                    </div>

                    <div className="direita">
                        <SubTotal />
                    </div>
                </div>
            </div>
        </Div>
    );
}