import './categoria.css';
import React from 'react';
import { Link,useNavigate  } from "react-router-dom";

const CategoriaSidebar = () => (
  <aside className="categoria-sidebar">
    <div className="categoria-logo">
      <img src="./img/logobiz.png" alt="Logo" className="categoria-logo-icon" />
      <span>biz.erp</span>
    </div>
    <nav className="categoria-menu">
      <a href="/dashboard" className="categoria-menu-item active">
        <img src="./img/home.png" alt="Dashboard" />
        Dashboard</a>
      <Link to="/produto" className="categoria-menu-item">
        <img src="./img/Category.png" alt="Produtos" />
        Produtos
      </Link>
      <Link to="/categoria" className="categoria-menu-item active">
        <img src="./img/etiqueta.png" alt="Categoria" />
        Categorias
      </Link>
      <a href="#" className="categoria-menu-item">
        <img src="./img/Document.png" alt="Relatórios" />
        Relatórios
      </a>
      <a href="#" className="categoria-menu-item">
        <img src="./img/Bag.png" alt="Vendas" />
        Vendas
      </a>
      <Link to="/clientes" className="categoria-menu-item active">
        <img src="./img/clientes.png" alt="clientes" />
        Clientes
      </Link>
    </nav>
    <ul className="categoria-logout">
    <li>
      <Link to="/"><img src="./img/logout.png" alt="" /><span>Logout</span></Link>
    </li>
  </ul>
  </aside>
);

const CategoriaTopBar = () => (
  <header className="categoria-top-bar">
    <div className="categoria-user-profile">
      <span>Calabreso Silva</span>
      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="" className="categoria-profile-pic" />
    </div>
  </header>
);
  
export default function Categoria() {
    return (
      <div className="categoria-container">
        <CategoriaSidebar />
        <div className="categoria-main-content">
          <CategoriaTopBar />
  
          <h1 className="categoria-title">Categorias</h1>
  
          <div className="categoria-header">
              <div className="categoria-search-wrapper">
                <input
                  type="text"
                  placeholder="Pesquisar por nome da categoria"
                  className="categoria-search"
                />
                <div className="categoria-search-icon">
                  <img src="./img/search.png" alt="Buscar" />
                  <span>Buscar</span>
                </div>
              </div>

              <Link to="/cadastro.categoria" className="categoria-add">
                  + Categoria
              </Link>
            </div>

  
          <table className="categoria-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Produtos</th>
                <th>Status</th>
                <th>Data de criação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Boné</td>
                <td>10</td>
                <td><span className="categoria-status ativo">Ativo</span></td>
                <td>20/11/1980</td>
                <td>
                  <button className="acao ver">
                    <img src="./img/olho.png" alt="Ver" />
                  </button>
                  <button className="acao editar">
                     <img src="./img/lapis.png" alt="Editar" />
                  </button>
                  <button className="acao deletar">
                     <img src="./img/lixo.png" alt="Deletar" />
                  </button>
                 </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tênis</td>
                <td>123</td>
                <td><span className="categoria-status ativo">Ativo</span></td>
                <td>20/11/1980</td>
                <td>
                <button className="acao ver">
                    <img src="./img/olho.png" alt="Ver" />
                  </button>
                  <button className="acao editar">
                     <img src="./img/lapis.png" alt="Editar" />
                  </button>
                  <button className="acao deletar">
                     <img src="./img/lixo.png" alt="Deletar" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Camisas</td>
                <td>40</td>
                <td><span className="categoria-status ativo">Ativo</span></td>
                <td>20/11/1980</td>
                <td>
                  <button className="acao ver">
                    <img src="./img/olho.png" alt="Ver" />
                  </button>
                  <button className="acao editar">
                    <img src="./img/lapis.png" alt="Editar" />
                  </button>
                  <button className="acao deletar">
                    <img src="./img/lixo.png" alt="Deletar" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }  


