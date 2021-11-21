import { Div } from "./styled";

import Cabecalho from '../../../components/common/cabecalho/index';
import Dados from '../../../components/styled/meusDados/index';
import Desejos from '../../../components/styled/favoritos/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function ListaDeDesejos() {
    return(
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <Dados />

                    <div className="direita">
                        <div className="tituluzin">
                            Lista de Desejos
                        </div>

                        <Desejos />
                        <Desejos />
                        <Desejos />
                        <Desejos />
                        <Desejos />
                        <Desejos />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}