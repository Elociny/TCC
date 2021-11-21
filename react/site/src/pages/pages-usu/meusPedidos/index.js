import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import Dados from '../../../components/styled/meusDados/index';
import Pedidos from '../../../components/styled/pedidos/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function meusPedidos() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />
                
                <div className="area">
                    <Dados />

                    <div className="direita">
                        <div className="tituluzin">
                            Meus Pedidos
                        </div>

                        <div className="sub">
                            Último 6 meses
                        </div>

                        <Pedidos />
                        <Pedidos />
                        <Pedidos />
                        <Pedidos />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}