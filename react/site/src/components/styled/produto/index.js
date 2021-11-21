import { Div } from "./styled";

import { Link } from 'react-router-dom';

export default function produto() {
    return (
        <Div>
            <div className="container">
                <Link className="link" to='/produto'>
                    <div className="f1-caixa">
                        <div className="f1-imagem">
                            <img src="/assets/images/camiseta.png" alt=""/>
                        </div>

                        <div className="f1-nome">
                            Simples ocasional Camiseta
    
                        </div>

                        <div className="f1-preco">
                            R$34,90
                        </div>
                    </div>
                </Link>
            </div>
        </Div>
    );
}