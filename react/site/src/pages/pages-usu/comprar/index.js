import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import TaxaDeEnvio from '../../../components/styled/taxaDeEnvio/index';
import ResumoDoPedido from '../../../components/styled/resumoDoPedido/index';
import FinalizarPedido from '../../../components/styled/finalizarPedido/index';
import RodaPe2 from '../../../components/common/rodaPe2/index';

export default function comprar() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />
                
                <div className="area">
                    <div className="esquerda">
                        <TaxaDeEnvio />
                        <ResumoDoPedido />
                    </div>

                    <div className="direita">
                        <FinalizarPedido />
                    </div>
                </div>

                <RodaPe2 />
            </div>
        </Div>
    );
}