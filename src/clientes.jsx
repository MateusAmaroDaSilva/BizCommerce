import { useState } from "react"
import "./clientes.css"

// Componentes de ícones
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

const ProductsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 7 9 19l-6-6 2-2 4 4 10-10z"></path>
  </svg>
)

const CategoriesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
  </svg>
)

const ReportsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 2v6h6"></path>
    <path d="M16 13H8"></path>
    <path d="M16 17H8"></path>
    <path d="M10 9H8"></path>
  </svg>
)

const SalesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
)

const ClientsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

const ViewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
  </svg>
)

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

// Componente principal
const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  
  // Dados de exemplo para a tabela
  const clientes = [
    { id: 1, nome: "Thiago", email: "example@gmail.com", telefone: "14997200010" },
    { id: 17, nome: "Vinicius", email: "example@gmail.com", telefone: "73434343143" },
    { id: 39, nome: "Calabreso Silva", email: "example@gmail.com", telefone: "13023232323" },
  ]

  return (
    <div className="container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="logo">
            <div className="logo-icon"></div>
            <h3>biz.erp</h3>
          </div>
          <ul className="menu">
            <li>
              <a href="#">
                <HomeIcon />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ProductsIcon />
                <span>Produtos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <CategoriesIcon />
                <span>Categorias</span>
              </a>
            </li>
            <li>
              <a href="#">
                <ReportsIcon />
                <span>Relatórios</span>
              </a>
            </li>
            <li>
              <a href="#">
                <SalesIcon />
                <span>Vendas</span>
              </a>
            </li>
            <li className="active">
              <a href="#">
                <ClientsIcon />
                <span>Clientes</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="logout">
          <a href="#">
            <LogoutIcon />
            <span>Logout</span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="content">
        {/* Cabeçalho do usuário */}
        <div className="user-header">
          <span>Calabreso Silva</span>
          <div className="avatar-container">
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=60&h=60&fit=crop"
              alt="Avatar do usuário"
            />
            <ChevronDownIcon />
          </div>
        </div>

        {/* Título da página */}
        <h1 className="page-title">Clientes</h1>

        {/* Barra de pesquisa e botão de adicionar */}
        <div className="actions-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar por nome do cliente"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <SearchIcon />
              <span>Buscar</span>
            </button>
          </div>
          <button className="add-button">
            <PlusIcon />
            <span>Criar Cliente</span>
          </button>
        </div>

        {/* Tabela de clientes */}
        <div className="table-container">
          <table className="clients-table">
            <thead>
              <tr>
                <th className="id-column">#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th className="actions-column">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td className="id-column">{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td className="actions-column">
                    <div className="action-buttons">
                      <button className="action-button view">
                        <ViewIcon />
                      </button>
                      <button className="action-button edit">
                        <EditIcon />
                      </button>
                      <button className="action-button delete">
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Clientes;
