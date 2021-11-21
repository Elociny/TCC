import { Div } from './styled';

export default function input() {
    return (
        <Div>
            <div className="container">
                <div className="input">
                    <div className="inp">
                        <input type="text" placeholder=""></input>
                    </div>

                    <div className="img">
                        <img src="/assets/images/editar.png" alt="" />
                    </div>
                </div>
                </div>
        </Div>
    );
}