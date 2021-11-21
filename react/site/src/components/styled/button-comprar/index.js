import { Div } from './styled';

import { Link } from 'react-router-dom';

export default function produto() {
    return (
        <Div>
            <Link className="link" to='/comprar'>
                <div className="botao">
                    <button>COMPRAR</button>
                </div>
            </Link>
        </Div>
    );
}