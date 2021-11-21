import { Div } from "./styled";

import Cabecalho from '../../../components/common/cabecalho/index';
import Input from '../../../components/common/input/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function novoEndereco() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="area">
                    <div className="d-titulo">
                        Adicionar um novo endereço
                    </div>

                    <div className="conj">
                        <div className="tit">
                            País/Região
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Nome completo (Nome e Sobrenome)
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Telefone
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            CEP
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Endereço
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Número da residência
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Complemento (opcional)
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Bairro
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Cidade
                        </div>

                        <Input />
                    </div>

                    <div className="conj">
                        <div className="tit">
                            Estado/ Província / Região
                        </div>

                        <Input />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}