import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/pages-usu/home/index';
import Cadastrar from './pages/pages-usu/cadastrar/index';
import Comprar from './pages/pages-usu/comprar/index';
import Feminino from './pages/pages-usu/feminino/index';
import ListaDeDesejos from './pages/pages-usu/listaDeDesejos/index';
import Login from './pages/pages-usu/login/index';
import NovoEndereco from './pages/pages-usu/novoEndereco/index';
import MinhaConta from './pages/pages-usu/minhaConta/index';
import MeusPedidos from './pages/pages-usu/meusPedidos/index';
import Pagamento from './pages/pages-usu/pagamento/index';
import PedidoConfirmado from './pages/pages-usu/pedidoConfirmado/index';
import Produto from './pages/pages-usu/produto/index';

export default function Rota() {
   return(
       <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/comprar" element={<Comprar />} />
                <Route path="/feminino" element={<Feminino />} />
                <Route path="/lista-de-desejos" element={<ListaDeDesejos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/novo-endereco" element={<NovoEndereco />} />
                <Route path="/minha-conta" element={<MinhaConta />} />
                <Route path="/meus-pedidos" element={<MeusPedidos />} />
                <Route path="/pagamento" element={<Pagamento />} />
                <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
                <Route path="/produto" element={<Produto />} />
           </Routes>
       </BrowserRouter>
   )
}
