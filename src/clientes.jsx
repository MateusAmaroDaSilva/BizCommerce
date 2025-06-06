<<<<<<< HEAD
"use client"

import { useState } from "react"
import "./clientes.css"

// SVG Icon Components
const Home = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const Package = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
)

const Tag = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
)

const FileText = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

const ShoppingBag = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const Users = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m22 21-3-3m0 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
  </svg>
)

const LogOut = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
)

const Search = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const Eye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const Edit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const Trash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6" />
    <path d="m19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
)

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9" />
  </svg>
)

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" x2="12" y1="5" y2="19" />
    <line x1="5" x2="19" y1="12" y2="12" />
  </svg>
)

export default function Clientes() {
  const [searchTerm, setSearchTerm] = useState("")

  const clientes = [
    {
      id: 1,
      nome: "Thiago",
      email: "example@gmail.com",
      telefone: "14997200010",
    },
    {
      id: 17,
      nome: "Vinícius",
      email: "example@gmail.com",
      telefone: "73443434143",
    },
    {
      id: 39,
      nome: "Calabreso Silva",
      email: "example@gmail.com",
      telefone: "13023232323",
    },
  ]

  const handleNavigateToCadastrarCliente = () => {
    window.location.href = "/cadastrar-cliente"
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <div className="logo-inner"></div>
            </div>
            <span className="logo-text">biz.erp</span>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <div className="nav-item">
              <Home className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item">
              <Package className="nav-icon" />
              <span>Produtos</span>
            </div>
            <div className="nav-item">
              <Tag className="nav-icon" />
              <span>Categorias</span>
            </div>
            <div className="nav-item">
              <FileText className="nav-icon" />
              <span>Relatórios</span>
            </div>
            <div className="nav-item">
              <ShoppingBag className="nav-icon" />
              <span>Vendas</span>
            </div>
            <div className="nav-item active">
              <Users className="nav-icon" />
              <span>Clientes</span>
            </div>
          </nav>
        </div>

        {/* Logout */}
        <div className="logout-container">
          <div className="nav-item">
            <LogOut className="nav-icon" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1 className="page-title">Clientes</h1>
          </div>

          <div className="header-right">
            <div className="user-profile">
              <span className="user-name">Calabreso Silva</span>
              <div className="user-avatar">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                  alt="Calabreso Silva"
                />
              </div>
              <ChevronDown />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          {/* Search and Actions */}
          <div className="content-header">
            <div className="search-container">
              <Search />
              <input
                type="text"
                placeholder="Pesquisar por nome do cliente"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="create-button" onClick={handleNavigateToCadastrarCliente}>
              <Plus />
              Criar Cliente
            </button>
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="clients-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-button view-button" title="Visualizar">
                          <Eye />
                        </button>
                        <button className="action-button edit-button" title="Editar">
                          <Edit />
                        </button>
                        <button className="action-button delete-button" title="Excluir">
                          <Trash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
=======
import "./clientes.css"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listCustomers } from "./services/custumerAPI";
import { initialCustomers } from "./services/custumerInitial";


const ClientesSidebar = () => {

  const token = localStorage.getItem("token");

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
)
}

const ClientesTopBar = () => (
  <header className="clientes-top-bar">
    <div className="clientes-user-profile">
      <span>Calabreso Silva</span>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt=""
        className="clientes-profile-pic"
      />
    </div>
  </header>
)

export default function Clientes() {
  const [custumers, setCustumers] = useState([]);

  useEffect(() => {
  
    const fetchCostumers = async () => {
      try {
        const response = await listCustomers();
    
        if (response.status === 200) {
          const data = await response.json();
          setCustumers(data.data);
        } else {
          throw new Error("Erro ao carregar da API");
        }
      } catch (error) {
        console.warn("Erro ao buscar da API, carregando dados locais...");
    
        setCustumers(initialCustomers().data)
      }
    };
    fetchCostumers();
 
    // listCustomers(token).then((resposta) => {
    //   if (resposta.status === 200) {
    //     resposta.json().then((custumers) => {
    //       setCustumers(custumers.data);
    //     });
    //   }
    // });
  }, []);

  console.log(custumers)

  return (
    <div className="clientes-container">
      <ClientesSidebar />
      <div className="clientes-main-content">
        <ClientesTopBar />

        <h1 className="clientes-title">Clientes</h1>

        <div className="clientes-header">
          <div className="clientes-search-wrapper">
            <input type="text" placeholder="Pesquisar por nome do cliente" className="clientes-search" />
            <div className="clientes-search-icon">
              <img src="./img/search.png" alt="Buscar" />
              <span>Buscar</span>
            </div>
          </div>

          <Link to="/cadastro.clientes" className="clientes-add">
             + Criar Cliente
          </Link>
        </div>

        <table className="clientes-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {custumers.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.phone}</td>
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
>>>>>>> 56e04d10b89bbe1160046689791e2cc85e249409
      </div>
    </div>
  )
}
