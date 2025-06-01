"use client"

import { useState } from "react"
import "./cadastrarvenda.css"

const CadastrarVenda = () => {
  const [activeTab, setActiveTab] = useState("Pagamento")
  const [selectedClient, setSelectedClient] = useState("")
  const [clientName, setClientName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [cep, setCep] = useState("")
  const [saleDate, setSaleDate] = useState("")
  const [selectedProducts, setSelectedProducts] = useState("")
  const [quantity, setQuantity] = useState(40)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cardFlag, setCardFlag] = useState("")
  const [saleStatus, setSaleStatus] = useState("Pago")

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
              <a href="./dashboard.jsx">
                <img src="/img/Home.png" alt="Dashboard" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="./produto.jsx">
                <img src="/img/Category.png" alt="Produtos" />
                <span>Produtos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/Document.png" alt="Relatórios" />
                <span>Relatórios</span>
              </a>
            </li>
            <li className="active">
              <a href="./vendas.jsx">
                <img src="/img/Bag.png" alt="Vendas" />
                <span>Vendas</span>
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
        <header className="header-container">
          <div className="header-left">
            <button className="back-button">
              <span>←</span>
            </button>
            <h1 className="page-title">Cadastrar Venda</h1>
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
        </header>

        <div className="form-container">
          <div className="form-section">
            <h2 className="section-title">Dados do Cliente</h2>

            <div className="form-group">
              <label>Selecionar Cliente *</label>
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="form-select"
              >
                <option value="">Selecione um cliente</option>
                <option value="cliente1">Cliente 1</option>
                <option value="cliente2">Cliente 2</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nome do cliente</label>
              <input
                type="text"
                placeholder="Nome completo"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Nome do cliente</label>
              <input type="text" placeholder="Nome completo" className="form-input" />
            </div>

            <div className="form-group">
              <label>Nome do cliente</label>
              <input type="text" placeholder="Nome completo" className="form-input" />
            </div>

            <div className="form-group">
              <label>Endereço</label>
              <input
                type="text"
                placeholder="Rua, número, complemento"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Estado</label>
                <input
                  type="text"
                  placeholder="UF"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>CEP</label>
              <input
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Produtos</h2>

            <div className="form-group">
              <label>Data da Venda *</label>
              <input
                type="date"
                placeholder="Informe a data"
                value={saleDate}
                onChange={(e) => setSaleDate(e.target.value)}
                className="form-input date-input"
              />
            </div>

            <div className="form-group">
              <label>Adicionar Produtos</label>
              <div className="product-row">
                <select
                  value={selectedProducts}
                  onChange={(e) => setSelectedProducts(e.target.value)}
                  className="form-select product-select"
                >
                  <option value="">Selecione os produtos</option>
                  <option value="produto1">Produto 1</option>
                  <option value="produto2">Produto 2</option>
                </select>
                <div className="quantity-container">
                  <label>Qtd.</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="quantity-input"
                  />
                  <button className="add-button">+</button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Produtos Selecionados</label>
              <div className="selected-products">
                <p>Nenhum produto adicionado</p>
              </div>
            </div>

            <div className="total-section">
              <div className="total-row">
                <span className="total-label">Total:</span>
                <span className="total-value">R$0,00</span>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "Pagamento" ? "active" : ""}`}
                onClick={() => setActiveTab("Pagamento")}
              >
                Pagamento
              </button>
              <button
                className={`tab ${activeTab === "Detalhes" ? "active" : ""}`}
                onClick={() => setActiveTab("Detalhes")}
              >
                Detalhes
              </button>
            </div>

            {activeTab === "Pagamento" && (
              <div className="tab-content">
                <div className="form-group">
                  <label>Método de Pagamento *</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Cartão de Crédito</option>
                    <option value="credito">Cartão de Crédito</option>
                    <option value="debito">Cartão de Débito</option>
                    <option value="pix">PIX</option>
                    <option value="dinheiro">Dinheiro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Bandeira *</label>
                  <select value={cardFlag} onChange={(e) => setCardFlag(e.target.value)} className="form-select">
                    <option value="">Selecione a bandeira do cartão</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="elo">Elo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Status da Venda *</label>
                  <div className="status-container">
                    <span className="status-badge pago">Pago</span>
                    <select
                      value={saleStatus}
                      onChange={(e) => setSaleStatus(e.target.value)}
                      className="form-select status-select"
                    >
                      <option value="Pago">Pagamento confirmado</option>
                      <option value="Pendente">Pagamento pendente</option>
                      <option value="Cancelado">Pagamento cancelado</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Detalhes" && (
              <div className="tab-content">
                <p>Conteúdo da aba Detalhes</p>
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button className="cancel-button">Cancelar</button>
          <button className="submit-button">Finalizar Venda</button>
        </div>
      </main>
    </div>
  )
}

export default CadastrarVenda
