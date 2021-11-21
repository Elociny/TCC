import { Div } from './styled';

import { Link } from 'react-router-dom';

import Cabecalho from '../../../components/common/cabecalho/index';
import RodaPe from '../../../components/common/rodaPe/index';
import Quadrado1 from '../../../components/styled/quadrado1/index';
import Quadrado2 from '../../../components/styled/quadrado2/index';

export default function home() {
    return (
        <Div>
            <div className="container">
                <Cabecalho />

                <div className="filho">
                    <div class="categoria">
                            <div class="titulo2">
                                Categoria
                            </div>

                            <div class="opcoes">
                                <div class="op1">
                                    <Link className="link" to='/feminino'>
                                        Feminino
                                    </Link>
                                </div>

                                <div class="op1">
                                    Masculino
                                </div>

                                <div class="op1">
                                    Infantil
                                </div>

                                <div class="op1">
                                    Plue Size
                                </div>

                                <div class="op1">
                                    Acessórios
                                </div>

                                <div class="op1">
                                    Calçados
                                </div>

                                <div class="op1">
                                    Intima
                                </div>
                            </div>
                    </div>

                    <div className="titulo2">
                        Ofertas
                    </div>

                    <div className="row">
                        <Quadrado1 />
                        <Quadrado1 />
                        <Quadrado1 />
                        <Quadrado1 />
                    </div>

                    <div className="titulo2">
                        Novidades
                    </div>
                    
                    <div className="imagem">
                        <img src="/assets/images/novidades.png" alt="" />
                    </div>

                    <div className="titulo2">
                        Tendências
                    </div>

                    <div className="row">
                        <Quadrado2 />
                        <Quadrado2 />
                        <Quadrado2 />
                        <Quadrado2 />
                    </div>
                </div>

                <RodaPe />
            </div>
        </Div>
    );
}
