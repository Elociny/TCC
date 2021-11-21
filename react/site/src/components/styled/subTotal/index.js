import { Div } from './styled';

export default function pagamento() {
    return (
        <Div>
            <div className="container">
                <div className="linha">
                    <div className="texto">
                        Subtotal: 
                    </div>

                    <div className="resultado">
                        R$34,90
                    </div>
                </div>

                <div className="diferenciado">
                    <div className="item">
                        <img src="/assets/images/camiseta.png" alt="" />
                    </div>

                    <div className="item">
                        Simples <br />
                        ocasional <br />
                        Camiseta
                    </div>

                    <div className="item">
                        1
                    </div>

                    <div className="item">
                        R$34,90
                    </div>
                </div>

                <div className="linha">
                    <div className="texto">
                        Entrega: 
                    </div>

                    <div className="resultado">
                        R$00,00
                    </div>
                </div>

                <div className="linha">
                    <div className="texto">
                        Total: 
                    </div>

                    <div className="resultado">
                        <span> R$34,90 </span>
                    </div>
                </div>
            </div>
        </Div>
    );
}