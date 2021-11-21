import { Div } from './styled';

export default function texto1() {
    return (
        <Div>
            <div className="container">
                <div className="titu">
                    Pedido Confirmado
                </div>

                <div className="titu-sub">
                    Seu pedido foi processado com sucesso.
                </div>

                <div className="paragrafo">
                    Um e-mail de confirmação foi enviado a você em nicoleélinda@gmail.com com todos os detalhes do pedido.
                </div>

                <div className="paragrafo">
                    Seu pagamento está sendo processado, você receberá um e-mail de confirmação.
                </div>

                <div className="paragrafo">
                    Para realizar o pagamento, imprima o boleto no valor de R$ 34,90. 
                </div>
            </div>
        </Div>
    );
}