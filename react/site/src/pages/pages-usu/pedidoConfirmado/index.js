import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import Texto1 from '../../../components/styled/texto1/index';
import Texto2 from '../../../components/styled/texto2/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function pedidoConfirmado() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <Texto1 />
                    <Texto2 />
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}