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
      phone: "(14) 98765 -1234",
      email: "clebinho.sincero@zapmail.com",
    },
    {
      name: "Jurema da Galáxia",
      phone: "(14) 54321-4321",
      email: "jurema.stars@interplanetario.org",
    },
    {
      name: "Tonhão Supremacy",
      phone: "(14) 12345 -4321",
      email: "tonhao.poderoso@supremacia.net",
    },
    {
      name: "Zé do Wi-Fi",
      phone: "(14) 12345 -0101",
      email: "zedowifi.conexao@roteador.email",
    },
    {
      name: "Calabreso Silva",
      phone: "(14) 4002-8922",
      email: "calabreso.silva@linguicahot.com",
    },
    {
      name: "Coxinelson Duarte",
      phone: "(14) 0011 -1110",
      email: "coxinelson.topzeira@fritemail.com",
    },
    {
      name: "Brunilda Pistola",
      phone: "(14) 7024 -2470",
      email: "brunilda1911@ragezone.com",
    },
    {
      name: "Salsiônio Rocha",
      phone: "(14) 5551 -1115",
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
            <li className="active">
              <a href="./relatorios.jsx">
                <img src="/img/Document.png" alt="Relatórios" />
                <span>Relatórios</span>
              </a>
            </li>
            <li>
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
            <h1 className="page-title">Relatórios</h1>
            <div className="period-selector">
              <span className="period-label">Período</span>
              <span className="period-value">{selectedPeriod}</span>
            </div>
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
              <span>🔗</span>
              Compartilhar
            </button>
            <button className="action-button export-button">
              <span>📤</span>
              Exportar
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-section total-sales">
            <h3 className="section-title">Total de vendas</h3>
            <div className="total-value">R$150.000,00</div>
            <div className="horizontal-chart">
              <div className="chart-bar" style={{ width: "100%" }}>
                <span className="bar-value">100</span>
              </div>
              <div className="chart-bar" style={{ width: "60%" }}>
                <span className="bar-value">100</span>
              </div>
              <div className="chart-bar" style={{ width: "40%" }}>
                <span className="bar-value">100</span>
              </div>
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
                  <span className="product-value">{item.value}</span>
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
            {clientsData.map((client, index) => (
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
