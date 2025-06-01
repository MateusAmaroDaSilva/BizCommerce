import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
<<<<<<< HEAD
import Relatorios from "./relatorios"
import Vendas from "./vendas";
import CadastrarVenda from './cadastrarvenda'
=======
import CadastroProduto from "./cadastro.produto";
<<<<<<< HEAD
import Categoria from "./categoria";
=======
import Categoria from "./categoria"
>>>>>>> 9fdaed5996d74e44710c621eb6057e219d83f43a
>>>>>>> 6903b01e679cba18ed6d41287f88351d4ebdaf72

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
<<<<<<< HEAD
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/cadastrarvenda" element={<CadastrarVenda />} />
        <Route path="/relatorios" element={<Relatorios />} />
=======
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-produto/:id" element={<CadastroProduto />} />
        <Route path="/categoria" element={<Categoria />} />
>>>>>>> 9fdaed5996d74e44710c621eb6057e219d83f43a
      </Routes>
    </Router>
  );
}

export default App;
