import { Div } from "./styled";

import Input2 from '../../../components/common/input2/index';

export default function cartoes() {
    return (
        <Div>
            <div class="minhaConta">
                <div className="titulo1">
                    Seus Cartões
                </div>

                <div class="f1-dados">
                    <div class="f1-tituluzinho">
                        Cartão de débito:
                    </div>

                    <Input2 />

                    <div class="f1-tituluzinho">
                        Cartão de crédito:
                    </div>

                    <Input2 />
                    <Input2 />
                </div>
            </div>
        </Div> 
    );
}