"use client"

import { useState } from "react"
import "./relatorios.css"

const Relatorios = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Abril, 2025")

  const salesData = [
    { product: "Tênis da Nike", value: "R$ 75.000,00", percentage: 100 },
    { product: "Boné da Nike", value: "R$ 45.000,00", percentage: 60 },
    { product: "Tênis da Adidas", value: "R$ 30.000,00", percentage: 40 },
  ]

  const clientsData = [
    {
      name: "Clebinho Sincero",
      phone: "(14) 98765-1234",
      email: "clebinho.sincero@zapmail.com",
    },
    {
      name: "Jurema da Galáxia",
      phone: "(14) 54321-4321",
      email: "jurema.stars@interplanetario.org",
    },
    {
      name: "Tonhão Supremacy",
      phone: "(14) 12345-4321",
      email: "tonhao.poderoso@supremacia.net",
    },
    {
      name: "Zé do Wi-Fi",
      phone: "(14) 12345-0101",
      email: "zedowifi.conexao@roteador.email",
    },
    {
      name: "Calabreso Silva",
      phone: "(14) 4002-8922",
      email: "calabreso.silva@linguicahot.com",
    },
    {
      name: "Coxinelson Duarte",
      phone: "(14) 00111-1110",
      email: "coxinelson.topzeira@fritemail.com",
    },
    {
      name: "Brunilda Pistola",
      phone: "(14) 7024-2470",
      email: "brunilda.1911@ragezone.com",
    },
    {
      name: "Salsiônio Rocha",
      phone: "(14) 5551-1115",
      email: "salsionio.picante@hotgrill.net",
    },
  ]

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
              <a href="/produtos">
                <img src="/img/Category.png" alt="Produtos" />
                <span>Produtos</span>
              </a>
            </li>
            <li className="active">
              <a href="/relatorios">
                <img src="/img/Document.png" alt="Relatórios" />
                <span>Relatórios</span>
              </a>
            </li>
            <li>
              <a href="/vendas">
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
            <h1 className="page-title">Relatórios</h1>
          </div>
          <div className="period-center">
            <span className="period-label">Período</span>
            <span className="period-value">{selectedPeriod}</span>
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

        <div className="report-header">
          <h2 className="report-title">Relatório de vendas mensal</h2>
          <div className="report-actions">
            <button className="action-button share-button">
              <svg
                className="action-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.18838C7.54305 8.46153 6.7317 8 5.8 8C4.14315 8 2.8 9.34315 2.8 11C2.8 12.6569 4.14315 14 5.8 14C6.7317 14 7.54305 13.5385 8.08261 12.8116L15.0227 16.6294C15.0077 16.7508 15 16.8745 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C17.0683 14 16.257 14.4615 15.7174 15.1884L8.77735 11.3706C8.79229 11.2492 8.8 11.1255 8.8 11C8.8 10.8745 8.79229 10.7508 8.77735 10.6294L15.7174 6.81162C16.257 7.53847 17.0683 8 18 8Z"
                  fill="currentColor"
                />
              </svg>
              Compartilhar
            </button>
            <button className="action-button export-button">
              <svg
                className="action-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L12 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Exportar
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-section total-sales">
            <h3 className="section-title">Total de vendas</h3>
            <div className="total-value">R$150.000,00</div>
            <div className="horizontal-chart">
              {salesData.map((item, index) => (
                <div key={index} className="chart-bar" style={{ width: `${item.percentage}%` }}>
                  <span className="bar-value">100</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section products-sold">
            <h3 className="section-title">Produtos Vendidos</h3>
            <div className="vertical-chart">
              <div className="chart-container">
                <div className="y-axis">
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                <div className="bars-container">
                  <div className="bar-group">
                    <div className="bar" style={{ height: "80%" }}></div>
                    <span className="bar-label">Tênis da Nike</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "60%" }}></div>
                    <span className="bar-label">Boné da Nike</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <span className="bar-label">Tênis da Adidas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-section revenue-product">
            <h3 className="section-title">Receita por produto</h3>
            <div className="product-list">
              {salesData.map((item, index) => (
                <div key={index} className="product-item">
                  <span className="product-name">{item.product}</span>
                  <span className="product-value">{item.value.replace("R$ ", "R$ ")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section revenue-period">
            <h3 className="section-title">Receita por Período</h3>
            <div className="line-chart">
              <div className="chart-container">
                <div className="y-axis">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>
                <div className="line-container">
                  <svg className="line-svg" viewBox="0 0 300 150">
                    <polyline
                      points="0,120 30,100 60,80 90,60 120,70 150,50 180,40 210,60 240,45 270,35 300,40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clients-section">
          <h3 className="section-title">
            <span className="client-icon">👤</span>
            Clientes
          </h3>
          <div className="clients-grid">
            {clientsData.slice(0, 8).map((client, index) => (
              <div key={index} className="client-item">
                <div className="client-name">{client.name}</div>
                <div className="client-phone">{client.phone}</div>
                <div className="client-email">{client.email}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Relatorios
