import { Div } from './styled';

export default function taxaDeEnvio() {
    return (
        <Div>
            <div className="container">
                <div className="img">
                    <img src="/assets/images/caminhao.png" alt="" />
                </div>

                <div className="textos">
                    <div className="negrito">
                        Taxa de envio
                    </div>

                    <div className="fino">
                        Compre mais R$14,10 para desfrutar de FRETE GRÁTIS!
                    </div>
                </div>
            </div>
        </Div>
    );
}