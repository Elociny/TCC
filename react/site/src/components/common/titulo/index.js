import { Div } from './styled';

import { Link } from 'react-router-dom';

export default function cabecalho() {
    return (
        <Div>
                <div className="titulo">
                    <Link className="link" to='/'>
                    ecommodas
                    </Link>
                </div>
        </Div>  
    );
}