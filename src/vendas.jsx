import { useState } from "react"
import "./vendas.css"

const initialProducts = [
  { id: 1, date: "20/10/2025", client: "Cláudio Reis", price: 60.90, cost: 55.45, status: "Pago", payment: "mastercard" },
  { id: 17, date: "20/10/2025", client: "Vitor Henrique", price: 660.90, cost: 55.45, status: "Pendente", payment: "pix" },
  { id: 39, date: "20/10/2025", client: "Mateus Amaro", price: 760.90, cost: 55.45, status: "Cancelado", payment: "mastercard" },
  { id: 39, date: "20/10/2025", client: "Thiago", price: 760.90, cost: 55.45, status: "Pago", payment: "pix" },
  { id: 17, date: "20/10/2025", client: "Miguel", price: 660.90, cost: 55.45, status: "Pago", payment: "pix" },
  { id: 39, date: "20/10/2025", client: "Jeann", price: 760.90, cost: 55.45, status: "Pago", payment: "pix" },
]

const formatNumber = (num) => num.toFixed(2)

const getPaymentIcon = (paymentType) => {
  if (paymentType === "mastercard") {
    return "/img/icone_master.png"
  }
  if (paymentType === "pix") {
    return "/img/icone_pix.png"
  }
  return "/img/icone_default_payment.png"
}

const Vendas = () => {
  const [products] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Filtro")

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value)
  }

  const filteredProducts = products.filter((product) => {
    const clientMatches = product.client.toLowerCase().includes(searchTerm)
    const statusMatches = statusFilter === "Filtro" || product.status === statusFilter
    return clientMatches && statusMatches
  })

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="logo">
            <img src="/img/logobiz.png" alt="Logo Biz ERP" />
            <h3>biz.erp</h3>
          </div>
          <ul className="menu">
            <li>
              <a href="/dashboard">
                <img src="/img/Home.png" alt="Dashboard" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/produto">
                <img src="/img/Category.png" alt="Produtos" />
                <span>Produtos</span>
              </a>
            </li>
            <li>
              <a href="/categorias">
                <img src="/img/icone_categorias.png" alt="Categorias" />
                <span>Categorias</span>
              </a>
            </li>
            <li>
              <a href="/relatorios">
                <img src="/img/Document.png" alt="Relatórios" />
                <span>Relatórios</span>
              </a>
            </li>
            <li className="active">
              <a href="/vendas">
                <img src="/img/Bag.png" alt="Vendas" />
                <span>Vendas</span>
              </a>
            </li>
            <li>
              <a href="/clientes">
                <img src="/img/icone-clientes.png" alt="Clientes" />
                <span>Clientes</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="logout">
          <a href="#">
            <img src="/img/logout.png" alt="Logout" />
            Logout
          </a>
        </div>
      </nav>

      <main className="content">
        {/* Título fixo no canto superior esquerdo */}
        <h1 className="page-title-fixed">Vendas</h1>

        <header className="header-container">
          {/* Espaço reservado para manter o layout */}
          <div className="page-title-spacer"></div>
          
          <div className="header-right-section">
            <div className="header-actions">
              <button className="secondary-button">
                <img src="/img/icone_exportar.png" alt="Exportar" />
                Exportar
              </button>
              <a href="./cadastrarvenda">
                <button className="primary-button">
                  <img src="/img/icone_adicionar.png" alt="Adicionar" />
                  Adicionar
                </button>
              </a>
            </div>
            <div className="user-info">
              <span>Calabreso Silva</span>
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                alt="Avatar"
              />
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>
        </header>

        <div className="metrics-container">
          <div className="metric-card">
            <div className="metric-label">Total de pedidos</div>
            <div className="metric-value">R$ 123,67</div>
            <div className="metric-percent">+43%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Número de vendas</div>
            <div className="metric-value">1.206</div>
            <div className="metric-percent">+43%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Clientes</div>
            <div className="metric-value">12</div>
            <div className="metric-percent">+4%</div>
          </div>
        </div>

        <div className="table-container">
          <div className="filters-container">
            <div className="search-container">
              <img src="/img/Search.png" alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Pesquisar por vendas..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <div className="filter-container">
              <img src="/img/icone_filtro.png" alt="Filtro" className="filter-icon" />
              <select value={statusFilter} onChange={handleStatusChange} className="filter-select">
                <option value="Filtro">Filtro</option>
                <option value="Pago">Pago</option>
                <option value="Pendente">Pendente</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>

          <div className="table-scroll-wrapper">
            <table className="products-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Data</th>
                  <th>Cliente</th>
                  <th>Preço</th>
                  <th>Frete</th>
                  <th>Status</th>
                  <th>Pagamento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={`${product.id}-${product.client}-${product.date}`}> 
                      <td>{product.id}</td>
                      <td>{product.date}</td>
                      <td>{product.client}</td>
                      <td>{formatNumber(product.price)}</td>
                      <td>{formatNumber(product.cost)}</td>
                      <td>
                        <span className={`status-badge ${product.status.toLowerCase()}`}>{product.status}</span>
                      </td>
                      <td>
                        <div className="payment-methods">
                          <img src={getPaymentIcon(product.payment)} alt={product.payment} />
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-button view-button" title="Visualizar">
                            <img src="/img/olho.png" alt="Visualizar" />
                          </button>
                          <button className="action-button edit-button" title="Editar">
                            <img src="/img/lapis.png" alt="Editar" />
                          </button>
                          <button className="action-button delete-button" title="Excluir">
                            <img src="/img/lixo.png" alt="Excluir" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center", color: "var(--text-secondary)" }}>
                      Nenhuma venda encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="pagination-container">
             <button className="pagination-button">&lt;</button>
             <button className="pagination-button">&gt;</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Vendas