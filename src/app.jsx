import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
import CadastroProduto from "./cadastro.produto";
import Categoria from "./categoria"
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
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/cadastro.categoria" element={<CadastroCategoria />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastro.clientes" element={<Cadastroclientes />} />
      </Routes>
    </Router>
  );
}

export default App;
