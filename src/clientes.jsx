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
      </div>
    </div>
  )
}
