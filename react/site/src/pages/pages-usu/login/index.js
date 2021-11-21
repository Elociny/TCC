import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import RodaPe from '../../../components/common/rodaPe';
import Button from '../../../components/styled/entrar-button/index';
import Button2 from '../../../components/styled/cadastrar-button/index';
import Email from '../../../components/common/input-email/index';
import Senha from '../../../components/common/input-senha/index';

export default function login() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div class="area">
                    <div class="caixa">
                        <div class="titu">
                            Login
                        </div>

                        <Email />

                        <Senha />

                        <Button />

                        <Button2 />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}