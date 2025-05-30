import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Produto from "./produto";
import Dashboard from "./dashboard";
import CadastroProduto from "./cadastro.produto";
import Categoria from "./categoria"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-produto/:id" element={<CadastroProduto />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App;
