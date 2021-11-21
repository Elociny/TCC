import { Div } from './styled';

import Input1 from '../../common/input1/index';

export default function minhaConta() {
    return (
        <Div>
            <div className="minhaConta">
                    <div className="titulo1">
                        Minha Conta
                    </div>

                    <div className="conjunto">
                        <div className="f1-dados">
                            <div className="f1-tituluzinho">
                                Nome:
                            </div>

                            <div className="input">
                                <Input1 />
                            </div>
                        </div>

                        <div className="f1-dados">
                            <div className="f1-tituluzinho">
                                E-mail:
                            </div>

                            <div className="input">
                                <Input1 />
                            </div>
                        </div>

                        <div className="f1-dados">
                            <div class="f1-tituluzinho">
                                Número de telefone/celular:
                            </div>

                            <div className="input">
                                <Input1 />
                            </div>
                        </div>

                        <div className="f1-dados">
                            <div className="f1-tituluzinho">
                                CPF:
                            </div>

                            <div className="input">
                                <Input1 />
                            </div>
                        </div>
                    </div>
                </div>
        </Div>
    );
}