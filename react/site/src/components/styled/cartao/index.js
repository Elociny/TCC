import { Div } from './styled';

export default function cartao() {
    return (
        <Div>
            <div className="container">
                <div className="in">
                    <div className="nom">
                        Número do cartão
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>

                <div className="in">
                    <div className="nom">
                        Em quantas parcelas deseja pagar?
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>

                <div className="in">
                    <div className="nom">
                        Nome impresso no cartão
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>

                <div className="con">
                    <div className="inp">
                        <div className="nom">
                            Validade
                        </div>

                        <div className="imp">
                            <input type="text" placeholder="" ></input> / <input type="text" placeholder="" ></input>
                        </div>
                    </div>

                    <div className="in">
                        <div className="nom">
                            Código de segurança
                        </div>

                        <div className="imp2">
                            <input type="text" placeholder="" ></input>
                        </div>
                    </div>
                </div>

                <div className="in">
                    <div className="nom">
                        CPF do titular
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>
            </div>
        </Div>
    );
}