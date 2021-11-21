import { Div } from "./styled";

export default function cartoes() {
    return (
        <Div>
            <div class="input">
                <div class="inp">
                    <input type="text" placeholder=""></input>
                </div>

                <div class="img">
                    <img src="/assets/images/mais.png" alt="" />
                </div>

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