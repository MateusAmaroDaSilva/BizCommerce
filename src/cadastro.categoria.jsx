import "./cadastro.categoria.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postProduct, getProduct } from "./services/productAPI";
import { postCategorias } from "./services/categoriaAPI";
import { useEffect, useState } from "react";

const PainelSidebar = () => (
  <aside className="clientes-sidebar">
      <div className="clientes-logo">
        <img src="./img/logobiz.png" alt="Logo" className="clientes-logo-icon" />
        <span>biz.erp</span>
      </div>
      <nav className="clientes-menu">
        <ul className="menu">
            <li>
              <Link to="/dashboard">
                <img src="../img/Home.png" alt="" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/produto">
                <img src="../img/Category.png" alt="" />
                <span>Produtos</span>
              </Link>
            </li>
            <li>
              <Link to="/categorias">
                <img src="../img/etiqueta.png" alt="Categotia" />
                <span>Categorias</span>
              </Link>
            </li>
            <li>
              <Link to="/relatorios">
                <img src="../img/Document.png" alt="" />
                <span>Relatórios</span>
              </Link>
            </li>
            <li>
              <Link to="/vendas">
                <img src="../img/Bag.png" alt="" />
                <span>Vendas</span>
              </Link>
            </li>
            <li>
              <Link to="/clientes">
                <img src="./img/clientes.png" alt="clientes" />
                Clientes
              </Link>
            </li>
          </ul>
      </nav>
      <ul className="clientes-logout">
        <li>
          <Link to="/">
            <img src="./img/logout.png" alt="" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
);

const PainelTopBar = () => (
  <header className="painel-top-bar">
    <div className="painel-user-profile">
      <span>Calabreso Silva</span>

      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt=""
        className="painel-profile-pic"
      />
    </div>
  </header>
);

export default function CadastroCategoria() {
  const [checkbox, setChecbox] = useState(true);
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [descricao, setDescricao] = useState("");



  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nomeCategoria;
    const description =  descricao;
    const status = checkbox === true ? 'ativo' : 'inativo';

    const requestBody = {
      name,
      description,
      status
    };
    console.log(requestBody)

    const result = await postCategorias(token, requestBody);
    console.log(result)
    if (result.status === 201) {
       navigate('/categorias') // Idealmente use React Router
    }
    else {
       alert("Cadastro Falha no Cadastro")
    }

  };

  return (
    <div className="painel-container">
      <PainelSidebar />

      <div className="painel-main-content">
        <PainelTopBar />

        <div className="categoria-content">
          <div className="categoria-header">
            <Link to="/categorias" className="categoria-back-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Cadastrar categoria</span>
            </Link>
          </div>

          <div className="categoria-form-container">
            <div className="categoria-form-panel">
              <div className="categoria-field">
                <label htmlFor="nome">Nome da categoria</label>

                <input
                  type="text"
                  id="nome"
                  placeholder="Ex: Tênis"
                  value={nomeCategoria}
                  onChange={(e) => setNomeCategoria(e.target.value)}
                  className="categoria-input"
                />
              </div>

              <div className="categoria-field">
                <label htmlFor="descricao">Descrição</label>

                <textarea
                  id="descricao"
                  placeholder="Descreva a categoria..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="categoria-textarea"
                  rows={6}
                />
              </div>
            </div>

            <div className="categoria-config-panel">
              <div className="config-header">
                <h3>Configurações</h3>
              </div>

              <div className="categoria-status">
                <div className="status-info">
                  <span className="status-label">Status</span>

                  <p className="status-description">
                    Define se a categoria estará ativa ou não.
                  </p>
                </div>

                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status"
                    checked={checkbox}
                    onChange={(e) => setChecbox(e.target.checked)}
                    className="toggle-input"
                  />

                  <label htmlFor="status" className="toggle-label"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="categoria-actions">
            <Link to="/categorias" className="btn-cancelar">
              Cancelar
            </Link>

            <button type="submit" className="btn-criar" onClick={handleSubmit}>
              Criar Categoria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
