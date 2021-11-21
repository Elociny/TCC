import { Div } from './styled';
import Titulo from '../titulo/index';

import { Link } from 'react-router-dom';

export default function cabecalho() {
    return (
        <Div>
            <div className="cabecalho">
                <Titulo />

                <div className="conjunto">
                    <div className="inp">
                        <input type="text" placeholder="Pesquisar..." ></input>
                    </div>

                    <div className="botao">
                        <Link className="link" to='/lista-de-desejos'>
                            <button>
                                <img src="/assets/images/VectorFavoritos.png" alt="" />
                            </button>
                        </Link>
                    </div>

                    <div className="botao">
                        <Link className="link" to='/meus-pedidos'>
                            <button>
                                <img src="/assets/images/Sacola.png" alt="" />
                            </button>
                        </Link>
                    </div>

                    <div className="botao">
                        <Link className="link" to='/minha-conta'>
                            <button>
                                <img src="/assets/images/Perfil.png" alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Div>
    );
}