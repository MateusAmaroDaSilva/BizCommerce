import "./clientes.css"
import { Link } from "react-router-dom"

const ClientesSidebar = () => (
  <aside className="clientes-sidebar">
    <div className="clientes-logo">
      <img src="./img/logobiz.png" alt="Logo" className="clientes-logo-icon" />
      <span>biz.erp</span>
    </div>
    <nav className="clientes-menu">
      <a href="/dashboard" className="clientes-menu-item">
        <img src="./img/home.png" alt="Dashboard" />
        Dashboard
      </a>
      <Link to="/produto" className="clientes-menu-item">
        <img src="./img/Category.png" alt="Produtos" />
        Produtos
      </Link>
      <Link to="/categoria" className="clientes-menu-item">
        <img src="./img/etiqueta.png" alt="Categoria" />
        Categorias
      </Link>
      <a href="#" className="clientes-menu-item">
        <img src="./img/Document.png" alt="Relatórios" />
        Relatórios
      </a>
      <a href="#" className="clientes-menu-item">
        <img src="./img/Bag.png" alt="Vendas" />
        Vendas
      </a>
      <Link to="/clientes" className="clientes-menu-item active">
        <img src="./img/clientes.png" alt="clientes" />
        Clientes
      </Link>
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
            <tr>
              <td>1</td>
              <td>Thiago</td>
              <td>example@gmail.com</td>
              <td>14997200010</td>
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
              <td>17</td>
              <td>Vinícius</td>
              <td>example@gmail.com</td>
              <td>73434343143</td>
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
              <td>39</td>
              <td>Calabreso Silva</td>
              <td>example@gmail.com</td>
              <td>13023234323</td>
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
  )
}
