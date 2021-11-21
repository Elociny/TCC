import { Div } from './styled';

export default function boleto() {
    return (
        <Div>
            <div className="container">
                <div className="tuitu">
                    BOLETO BANCÁRIO
                </div>

                <div className="para">
                    O Boleto bancário será exibido após a confirmação da compra e poderá ser impresso para pagamento em qualquer agência bancária, ou ter o número anotado para pagamento pelo telefone ou internet.
                </div>
            </div>
        </Div>
    );
}