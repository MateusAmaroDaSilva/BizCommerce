import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
import Relatorios from "./relatorios"
import Vendas from "./vendas";
import CadastrarVenda from './cadastrarvenda'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/cadastrarvenda" element={<CadastrarVenda />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
