import "./categoria.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listCategorias } from "./services/categoriaAPI";
import { initialCategorias } from "./services/categoriasInitial";

const CategoriaSidebar = () => {
  //Valida usuário Logado
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token || token == null) {
  //     //Redirecionar se não estiver autenticado
  //   }
  // }, []);

  //Função de Logout
  const handleLogout = async (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    //Redirecionar para deslogar
  };

  return (
    <aside className="clientes-sidebar">
    <div className="clientes-logo">
      <img src="./img/logobiz.png" alt="Logo" className="clientes-logo-icon" />
      <span>biz.erp</span>
    </div>
<<<<<<< HEAD
    <nav className="categoria-menu">
      <a href="/dashboard" className="categoria-menu-item active">
        <img src="./img/Home.png" alt="Dashboard" />
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
=======
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
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
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
};

const CategoriaTopBar = () => (
  <header className="categoria-top-bar">
    <div className="categoria-user-profile">
      <span>Calabreso Silva</span>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt=""
        className="categoria-profile-pic"
      />
    </div>
  </header>
);

export default function Categoria() {
  const [categorias, setCategorias] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {

     const fetchCategorias = async () => {
          try {
            const response = await listCategorias(token);
      
            if (response.status === 200) {
              const data = await response.json();
              setCategorias(data.data);
            } else {
              throw new Error("Erro ao carregar da API");
            }
          } catch (error) {
            console.warn("Erro ao buscar da API, carregando dados locais...");
      
            setCategorias(initialCategorias().data)
          }
        };
      
        fetchCategorias();

    // listCategorias().then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((categorias) => {
    //       setCategorias(categorias.data);
    //     });
    //   }
    // });
  }, []);
  console.log(categorias);

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
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.name}</td>
                <td>{categoria.products_count}</td>
                <td>
                  {categoria.status === "ativo" ? (
                    <span className="categoria-status ativo">Ativo</span>
                  ) : (
                    <span className="categoria-status inativo">Inativo</span>
                  )}
                </td>
                <td>{categoria.created_at}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
