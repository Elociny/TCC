import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import Filtro from '../../../components/styled/filtros/index';
import Produto from '../../../components/styled/produto/index';
import RodaPe from '../../../components/common/rodaPe2/index';

export default function feminino() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="row">
                    <Filtro />

                    <div className="wrap">
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}