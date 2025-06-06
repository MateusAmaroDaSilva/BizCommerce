import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
import CadastroProduto from "./cadastro.produto";
import Categoria from "./categoria";
import Relatorios from "./relatorios"
import Vendas from "./vendas";
import CadastrarVenda from './cadastrarvenda'
import CadastroCategoria from "./cadastro.categoria"
import Clientes from "./clientes"
import Cadastroclientes from "./cadastro.clientes"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-produto/:id" element={<CadastroProduto />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/cadastrarvenda" element={<CadastrarVenda />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/cadastro.categoria" element={<CadastroCategoria />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastro.clientes" element={<Cadastroclientes />} />
      </Routes>
    </Router>
  );
}

export default App;
