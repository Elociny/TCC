import{ Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import RodaPe from '../../../components/common/rodaPe';
import Email from '../../../components/common/input-email/index';
import Senha from  '../../../components/common/input-senha/index';
import ConfirmarSenha from '../../../components/styled/input-confirmarSenha/index';
import Criar from '../../../components/styled/criar-button/index';

export default function login() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div class="area">
                    <div class="caixa">
                        <div class="titu">
                            Cadastrar
                        </div>

                        <Email />

                        <Senha />

                        <ConfirmarSenha />

                        <Criar />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}