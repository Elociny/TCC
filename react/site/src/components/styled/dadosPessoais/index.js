import { Div } from './styled';

export default function dadosPessoais() {
    return (
        <Div>
            <div className="container">
                <div className="titut">
                    Finalizar Compra:
                </div>

                <div className="area">
                    <div className="dados">
                        <div className="titut2">
                            DADOS PESSOAIS
                        </div>

                        <div className="dad">
                            <div className="nom">
                                Email
                            </div>

                            <div className="input">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="dado">
                                <div className="nom">
                                    Nome
                                </div>

                                <div className="input2">
                                    <input type="text" placeholder="" ></input>
                                </div>
                            </div>

                            <div className="dado">
                                <div className="nom">
                                    Sobrenome
                                </div>

                                <div className="input2">
                                    <input type="text" placeholder="" ></input>
                                </div>
                            </div>
                        </div>

                        <div className="dad">
                            <div className="nom">
                                CPF
                            </div>

                            <div className="input">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>

                        <div className="dad">
                            <div className="nom">
                                Telefone
                            </div>

                            <div className="input">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
}