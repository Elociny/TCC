import { Div } from './styled';

export default function entrega() {
    return (
        <Div>
            <div className="container">
                <div className="titut">
                    Entrega
                </div>

                <div className="entrega">
                    <div className="row">
                        <div className="dados">
                            <div className="nom">
                                Cep*
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>

                        <div className="dados">
                            <div className="nom">
                                Endereço
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="dados">
                            <div className="nom">
                                Barirro
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>

                        <div className="dados">
                            <div className="nom">
                                Estado
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="dados">
                            <div className="nom">
                                Rua / Avenida
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>

                        <div className="dados">
                            <div className="nom">
                                Número
                            </div>

                            <div className="input2">
                                <input type="text" placeholder="" ></input>
                            </div>
                        </div>
                    </div>

                    <div className="dad">
                        <div className="nom">
                            Destinatario
                        </div>

                        <div className="input">
                            <input type="text" placeholder="" ></input>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
}