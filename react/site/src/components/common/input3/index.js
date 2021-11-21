import { Div } from "./styled";

import { Link } from 'react-router-dom';

export default function cartoes() {
    return (
        <Div>
            <div class="input">
                <div class="inp">
                    <input type="text" placeholder=""></input>
                </div>

                <Link className="link" to='/novo-endereco'>
                    <div class="img">
                        <img src="/assets/images/mais.png" alt="" />
                    </div>
                </Link>

                <div class="img">
                    <img src="/assets/images/editar.png" alt="" />
                </div>

                <div class="img">
                    <img src="/assets/images/lixeira.png" alt="" />
                </div>
            </div>
        </Div>
    );
}