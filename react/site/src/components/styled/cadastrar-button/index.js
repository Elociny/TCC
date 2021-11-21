import { Div } from "./styled";

import { Link } from 'react-router-dom';

export default function button() {
    return (
        <Div>
            <div className="cadastrar">
                <Link className="link" to='/cadastrar'>
                    <button>CADASTRAR</button>
                </Link>
            </div>
        </Div> 
    );
}