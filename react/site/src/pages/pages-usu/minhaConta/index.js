import { Div } from "./styled";

import Cabecalho from '../../../components/common/cabecalho/index';
import Dados from '../../../components/styled/meusDados/index';
import MinhaConta from '../../../components/styled/minhaConta/index';
import Cartoes from '../../../components/styled/cartoes/index';
import Enderecos from '../../../components/styled/enderecos/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function conta() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />
                
                <div className="conteudo">
                    <Dados />

                    <div className="column">
                        <MinhaConta />
                        <Cartoes />
                        <Enderecos />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}