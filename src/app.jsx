import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
import Relatorios from "./relatorios"
import Vendas from "./vendas";
import CadastrarVenda from './cadastrarvenda'
import CadastroProduto from "./cadastro.produto";
<<<<<<< HEAD

import Categoria from "./categoria";



import Clientes from "./clientes"
import CadastrarCliente from "./cadastrarcliente";
=======
import Categoria from "./categoria";
import Relatorios from "./relatorios"
import Vendas from "./vendas";
import CadastrarVenda from './cadastrarvenda'
import CadastroCategoria from "./cadastro.categoria"
import Clientes from "./clientes"
import Cadastroclientes from "./cadastro.clientes"
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
<<<<<<< HEAD
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastrarvenda" element={<CadastrarVenda />} />
        <Route path="/cadastrarcliente" element={<CadastrarCliente />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/cadastro.produto" element={<CadastroProduto />} />
        <Route path="/cadastro.produto/:id" element={<CadastroProduto />} />
        <Route path="/categoria" element={<Categoria />} />
=======
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-produto/:id" element={<CadastroProduto />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/cadastrarvenda" element={<CadastrarVenda />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/cadastro.categoria" element={<CadastroCategoria />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastro.clientes" element={<Cadastroclientes />} />
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
      </Routes>
    </Router>
  );
}

export default App;
