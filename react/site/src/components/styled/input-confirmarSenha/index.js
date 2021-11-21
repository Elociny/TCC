import { Div } from './styled';

export default function login() {
    return (
        <Div>
            <div className="senha">
                <input type="text" placeholder="Confirmar Senha" ></input>
            </div> 
        </Div>
    );
}